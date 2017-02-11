import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  candidate: DS.belongsTo('candidate'),
  observations: DS.attr('string'),
  record_status: DS.hasMany('record-status'),
  recordSorting: ['inserted_at:desc'],
  recordStatusSorted: Ember.computed.sort('record_status', 'recordSorting')
});
