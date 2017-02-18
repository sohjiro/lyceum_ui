import Ember from 'ember';

export function formatDate(value/*, hash*/) {
  console.log(value.to);
  return value;
}

export default Ember.Helper.helper(formatDate);
