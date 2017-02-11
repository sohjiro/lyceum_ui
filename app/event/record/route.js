import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').findRecord('record', params.record_id);
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('statuses', this.get('store').findAll('status'));
  },
  actions: {
    selectStatus: function(value) {
      console.log(value);
      var status = this.store.peekRecord('status', value);
      this.set('status', status);
    },
    update: function() {
      this.controller.model.save().then((record) => {
        let recordStatus = this.store.createRecord('record-status', {
          record: record,
          status: this.get('status')
        });

        recordStatus.save().then(() => {
          this.controller.set('success', {message: 'Status saved'});
          this.controller.set('error', null);
        });
      }).catch((reason) => {
        this.controller.set('error', reason.errors);
        this.controller.set('success', null);
        this.controller.model.rollbackAttributes();
      });
    }
  }
});
