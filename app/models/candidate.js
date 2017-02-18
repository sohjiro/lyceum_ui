import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  degree: DS.attr('string'),
  email: DS.attr('string'),
  telephone: DS.attr('string'),
  records: DS.hasMany('record')
});
