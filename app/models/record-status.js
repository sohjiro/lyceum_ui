import DS from 'ember-data';

export default DS.Model.extend({
  record: DS.belongsTo('record'),
  status: DS.belongsTo('status'),
  inserted_at: DS.attr('date')
});
