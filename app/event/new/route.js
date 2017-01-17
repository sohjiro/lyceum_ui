import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      var new_event = this.store.createRecord('event', {
        type: this.controller.get('type'),
        name: this.controller.get('name'),
        starting_date: this.controller.get('starting_date'),
        campus: this.controller.get('campus'),
        quorum: this.controller.get('quorum'),
        price: this.controller.get('price')
      });

      new_event.save().then(() => {
        this.controller.set('success', {message: 'A new event has been created'});
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        new_event.rollbackAttributes();
      });
    }
  }
});
