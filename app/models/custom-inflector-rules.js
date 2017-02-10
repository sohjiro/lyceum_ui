import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('campus', 'campuses');
inflector.irregular('recordStatus', 'records_statuses');

// Meet Ember Inspector's expectation of an export
export default {};
