import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  starting_date: DS.attr('date'),
  campus: DS.attr('string'),
  quorum: DS.attr('number'),
  price: DS.attr('number')
});
