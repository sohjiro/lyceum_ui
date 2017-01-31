import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  starting_date: DS.attr('string'),
  campus: DS.attr('string'),
  quorum: DS.attr('number'),
  price: DS.attr('number'),
  candidates: DS.hasMany('candidate'),
  type: DS.belongsTo('type')
});
