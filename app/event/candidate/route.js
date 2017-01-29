import Ember from 'ember';

function clear(controller) {
  controller.set('name', null);
  controller.set('degree', null);
  controller.set('email', null);
  controller.set('telephone', null);
  controller.set('observations', null);
}

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('statuses', this.get('store').findAll('status'));
  },
  actions: {
    selectStatus(value) {
      var status = this.get('store').peekRecord('status', value);
      this.controller.model.set('status', status);
    },
    cancel: function() {
      this.controller.model.reload();
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
