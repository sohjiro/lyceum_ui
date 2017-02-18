import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  actions: {
    search: task(function* (term) {
      yield timeout(1500);
      return this.get('store').query('candidate', { term: term });
    })
  }
});
