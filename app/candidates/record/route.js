import Ember from 'ember';

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
      this.set('event', status);
    }
  }
});
