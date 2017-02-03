import Ember from 'ember';

function clear(controller) {
  controller.set('error', null);
  controller.set('type', null);
  controller.set('name', null);
  controller.set('starting_date', null);
  controller.set('campus', null);
  controller.set('quorum', null);
  controller.set('price', null);
}

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('types', this.get('store').findAll('type'));
    controller.set('campuses', this.get('store').findAll('campus'));
    controller.set('subjects', this.get('store').findAll('subject'));
  },
  actions: {
    selectSubject(value) {
      var subject = this.get('store').peekRecord('subject', value);
      this.set('subject', subject);
    },
    selectType(value) {
      var types = this.get('store').peekRecord('type', value);
      this.set('type', types);
    },
    selectCampus(value) {
      var campus = this.get('store').peekRecord('campus', value);
      this.set('campus', campus);
    },
    cancel: function() {
      clear(this.controller);
      this.transitionTo('events');
    },
    addNew: function() {
      var new_event = this.store.createRecord('event', {
        type: this.get('type'),
        subject: this.get('subject'),
        starting_date: this.controller.get('starting_date'),
        campus: this.get('campus'),
        quorum: this.controller.get('quorum'),
        price: this.controller.get('price')
      });

      new_event.save().then(() => {
        this.controller.set('success', {message: 'A new event has been created'});
        this.controller.set('error', null);
        clear(this.controller);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        new_event.rollbackAttributes();
      });
    }
  }
});
