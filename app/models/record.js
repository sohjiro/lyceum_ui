import DS from 'ember-data';

export default DS.Model.extend({
  candidate: DS.belongsTo('candidate'),
  event: DS.belongsTo('event'),
  statuses: DS.hasMany('status'),
  observations: DS.attr('string')
});
