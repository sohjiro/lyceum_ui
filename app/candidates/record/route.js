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
    selectEvent(value) {
      var event = this.get('store').peekRecord('event', value);
      this.set('event', event);
    },
    selectStatus(value) {
      var status = this.get('store').peekRecord('status', value);
      this.set('status', status);
    },
    cancel: function() {
      clear(this.controller);
      this.transitionTo('candidates');
    },
    add: function() {
      var new_record = this.store.createRecord('record', {
        candidate: this.controller.model,
        event: this.get('event'),
        status: this.get('status'),
        observations: this.controller.get('observations')
      });

      new_record.save().then(() => {
        this.controller.set('success', {message: 'Candidate add to event'});
        this.controller.set('error', null);
        clear(this.controller);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        new_record.rollbackAttributes();
      });
    },
  }
});
