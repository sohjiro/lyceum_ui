import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').peekRecord('subject', params.subject_id);
  },
  actions: {
    cancel: function() {
      this.controller.model.reload();
      this.transitionTo('subjects');
    },
    update: function() {
      this.controller.model.save().then(() => {
        this.controller.set('success', {message: 'Subject Updated'});
        this.controller.set('error', null);
        this.controller.set('name', null);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        this.controller.model.rollbackAttributes();
      });
    }
  }
});
