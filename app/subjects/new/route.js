import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    cancel: function() {
      this.controller.set('subject', null);
      this.controller.set('error', null);
      this.controller.set('success', null);
      this.transitionTo('subjects');
    },
    add: function() {
      var new_subject = this.store.createRecord('subject', {
        name: this.controller.get('subject')
      });

      new_subject.save().then(() => {
        this.controller.set('success', {message: 'A new event has been created'});
        this.controller.set('error', null);
        this.controller.set('subject', null);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        new_subject.rollbackAttributes();
      });
    }
  }
});
