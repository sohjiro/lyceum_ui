import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    send: function() {
      let records = this.controller.get('records') || [];
      let subject = this.controller.get('subject');
      let body = this.controller.get('data');
      let to = records.mapBy('candidate.id').join(',');

      return this.get('ajax').request('', {
        method: 'POST',
        data: {
          mail: {
            to: to,
            subject: subject,
            body: body
          }
        }
      });


      // let mail = this.store.createRecord('mail', {
      //   to: to,
      //   subject: subject,
      //   body: body
      // });

      // mail.save().then(() => {
      //   console.log("successfully send it");
      // }).catch((reason) => {
      //   console.log(reason);
      // });
    }
  }
});
