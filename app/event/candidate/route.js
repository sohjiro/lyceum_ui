import Ember from 'ember';

function clear(controller) {
  controller.set('name', null);
  controller.set('degree', null);
  controller.set('email', null);
  controller.set('telephone', null);
  controller.set('observations', null);
}

export default Ember.Route.extend({
  actions: {
    cancel: function() {
      clear(this.controller);
      this.transitionTo('event', this.controller.model);
    }
  }
});
