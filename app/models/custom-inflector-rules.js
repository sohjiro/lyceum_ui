import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('campus', 'campuses');

// Meet Ember Inspector's expectation of an export
export default {};
