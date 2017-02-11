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
    cancel: function() {
      let model = this.controller.model;
      model.rollbackAttributes();
      this.controller.set('status', model.get('recordStatusSorted.firstObject.status'));
      this.transitionTo('event', model.get('event'));
    },
    update: function() {
      this.controller.model.save().then((record) => {
        let recordStatus = this.store.createRecord('record-status', {
          record: record,
          status: this.controller.get('status')
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
