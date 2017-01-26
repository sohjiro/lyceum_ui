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
      this.set('status', status);
    },
    cancel: function() {
      clear(this.controller);
      this.transitionTo('event', this.controller.model);
    },
    save: function() {
      console.log(this.get('status_id'));
      var candidate = this.store.createRecord('candidate', {
        name: this.controller.get('name'),
        degree: this.controller.get('degree'),
        email: this.controller.get('email'),
        telephone: this.controller.get('telephone'),
        observations: this.controller.get('observations'),
        event: this.controller.model,
        status: this.get('status')
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
