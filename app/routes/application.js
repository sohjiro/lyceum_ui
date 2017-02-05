import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('campuses', this.get('store').findAll('campus'));
  },
});
