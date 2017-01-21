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
      this.controller.model.rollbackAttributes();
      this.transitionTo('event', this.controller.model.get('event'));
    },
    update: function() {
      this.controller.model.save().then(() => {
        this.controller.set('success', {message: 'Participant Updated'});
        this.controller.set('error', null);
        clear(this.controller);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        this.controller.model.rollbackAttributes();
      });
    }
  }
});
