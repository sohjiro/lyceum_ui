import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    send: function() {
      var candidates = this.controller.get('candidates');
      let subject = this.controller.get('subject');
      let body = this.controller.get('data');

      let data = `Mail send to ${candidates} with subject ${subject} and body ${body}`;

      console.log(data);
    }
  }
});
