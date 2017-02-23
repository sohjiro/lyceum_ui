import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: { event_id: 0 },
  model(params) {
    return this.store.query('candidate', { event_id: params["event_id"] });
  },

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
