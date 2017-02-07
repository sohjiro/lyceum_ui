import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.belongsTo('subject'),
  starting_date: DS.attr('string'),
  campus: DS.belongsTo('campus'),
  quorum: DS.attr('number'),
  price: DS.attr('number'),
  type: DS.belongsTo('type'),

  records: DS.hasMany('record')
});
