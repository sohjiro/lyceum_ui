import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  inserted_at: DS.attr('string'),
  updated_at: DS.attr('string')
});
