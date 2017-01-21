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
    },
    save: function() {
      var candidate = this.store.createRecord('candidate', {
        name: this.controller.get('name'),
        degree: this.controller.get('degree'),
        email: this.controller.get('email'),
        telephone: this.controller.get('telephone'),
        observations: this.controller.get('observations'),
        event: this.controller.model
      });

      candidate.save().then(() => {
        this.controller.set('success', {message: 'Participant added'});
        this.controller.set('error', null);
        clear(this.controller);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        candidate.rollbackAttributes();
      });
    }
  }
});
