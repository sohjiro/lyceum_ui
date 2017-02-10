import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  candidate: DS.belongsTo('candidate'),
  record_status: DS.hasMany('record-status'),
  observations: DS.attr('string')
});
