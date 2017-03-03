import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    send: function() {
      let records = this.controller.get('records') || [];
      let subject = this.controller.get('subject');
      let body = this.controller.get('data');
      let to = records.mapBy('candidate.id').join(',');

      let mail = this.store.createRecord('mail', {
        to: to,
        subject: subject,
        body: body
      });

      mail.save().then(() => {
        this.controller.set('success', {message: 'Successfully send it'});
        this.controller.set('error', null);
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
      });
    }
  }
});
