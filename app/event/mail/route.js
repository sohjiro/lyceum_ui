import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    send: function() {
      let records = this.controller.get('records') || [];
      let subject = this.controller.get('subject');
      let body = this.controller.get('data');
      let to = records.mapBy('candidate.email').join(',');

      let mail = this.store.createRecord('mail', {
        to:  to,
        subject: subject,
        body: body
      });

      mail.save().then(() => {
        console.log("successfully send it");
      }).catch((reason) => {
        console.log(reason);
      });
    }
  }
});
