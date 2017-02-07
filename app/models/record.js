import DS from 'ember-data';

export default DS.Model.extend({
  candidate: DS.belongsTo('candidate'),
  event: DS.belongsTo('event'),
  status: DS.belongsTo('status'),
  observations: DS.attr('string')
});
