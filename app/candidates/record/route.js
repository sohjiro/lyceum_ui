import Ember from 'ember';

function clear(controller) {
  controller.set('observations', null);
}
export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('events', this.get('store').findAll('event'));
    controller.set('statuses', this.get('store').findAll('status'));
  },
  actions: {
    cancel: function() {
      clear(this.controller);
      this.transitionTo('candidates');
    },
    add: function() {
      var new_record = this.store.createRecord('record', {
        candidate: this.controller.model,
        event: this.controller.get('event'),
        observations: this.controller.get('observations')
      });

      new_record.save().then((record) => {
        let recordStatus = this.store.createRecord('record-status', {
          record: record,
          status: this.controller.get('status')
        });

        recordStatus.save().then(() => {
          this.controller.set('success', {message: 'Candidate add to event'});
          this.controller.set('error', null);
          clear(this.controller);
        });
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        new_record.rollbackAttributes();
      });
    },
  }
});
