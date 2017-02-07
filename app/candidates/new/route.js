import Ember from 'ember';

function clear(controller) {
  controller.set('error', null);
  controller.set('name', null);
  controller.set('degree', null);
  controller.set('email', null);
  controller.set('telephone', null);
}

export default Ember.Route.extend({
  actions: {
    cancel: function() {
      clear(this.controller);
      this.transitionTo('candidates');
    },
    save: function() {
      var new_candidate = this.createRecord('candidate', {
        name: this.controller.get('name'),
        degree: this.controller.get('degree'),
        email: this.controller.get('email'),
        telephone: this.controller.get('telephone')
      });

      new_candidate.save().then(() => {
        this.controller.set('success', {message: 'Candidate created'});
        this.controller.set('error', null);
        clear(this.controller);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        new_candidate.rollbackAttributes();
      });
    }
  }
});
