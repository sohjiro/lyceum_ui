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

      debugger;

      new_event.save().then(() => {
        console.log('save successful');
        this.controller.set('message', 'A new event has been created');
      }, function() {
        this.controller.set('message', 'Saved failure');
      });
    }
  }
});
