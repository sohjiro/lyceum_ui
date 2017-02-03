import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.belongsTo('subject'),
  starting_date: DS.attr('string'),
  campus: DS.belongsTo('campus'),
  quorum: DS.attr('number'),
  price: DS.attr('number'),
  candidates: DS.hasMany('candidate'),
  type: DS.belongsTo('type')
});
