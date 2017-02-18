import Ember from 'ember';

export function formatDate(value/*, hash*/) {
  return value[0].toDateString();
}

export default Ember.Helper.helper(formatDate);
