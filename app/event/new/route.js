import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      let starting_date = new Date(this.controller.get('starting_date'));

      var new_event = this.store.createRecord('event', {
        type: this.controller.get('type'),
        name: this.controller.get('name'),
        starting_date: starting_date.toJSON(),
        campus: this.controller.get('campus'),
        quorum: this.controller.get('quorum'),
        price: this.controller.get('price')
      });

      new_event.save().then(() => {
        this.controller.set('success', {message: 'A new event has been created'});
        this.controller.set('type', null);
        this.controller.set('name', null);
        this.controller.set('starting_date', null);
        this.controller.set('campus', null);
        this.controller.set('quorum', null);
        this.controller.set('price', null);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        new_event.rollbackAttributes();
      });
    }
  }
});
