import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {type: "type", name: "name", starting_date: "2017-15-01 16:39", campus: "campus", quorum: 0, price: 0.0}
    ];
  }
});
