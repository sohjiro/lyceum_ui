import Ember from 'ember';

export default Ember.Controller.extend({
  currentStatus: Ember.observer('model.recordStatusSorted', function() {
    this.set('status', this.model.get('recordStatusSorted.firstObject.status'));
  }),
  actions: {
    selectStatus: function(status) {
      this.set('status', status);
    }
  }
});
