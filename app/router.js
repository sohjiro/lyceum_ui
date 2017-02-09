import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('show', {path: ':event_id'});
  });
  this.route('subjects', function() {
    this.route('new');
    this.route('edit', {path: ':subject_id'});
  });
  this.route('campuses', {path: 'campuses/:campus_id'});
  this.route('candidates', function() {
    this.route('new');
    this.route('record', {path: ':candidate_id/records'});
  });
});

export default Router;
