import Ember from 'ember';

function clear(controller) {
  controller.set('selected', null);
  controller.set('status', null);
  controller.set('observations', null);
}

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('statuses', this.store.findAll('status'));
  },
  actions: {
    cancel: function() {
      this.controller.set('success', null);
      this.controller.set('error', null);
      clear(this.controller);
      this.transitionTo('event', this.controller.model);
    },
    add: function() {
      let candidate = this.controller.get('selected');
      let status = this.controller.get('status');

      var new_record = this.store.createRecord('record', {
        candidate: candidate,
        event: this.controller.model,
        observations: this.controller.get('observations')
      });

      new_record.save().then((record) => {
        let recordStatus = this.store.createRecord('record-status', {
          record: record,
          status: status
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
    }
  }
});
