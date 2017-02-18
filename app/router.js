import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
  });
  this.route('subjects', function() {
    this.route('new');
    this.route('edit', {path: ':subject_id'});
  });
  this.route('campuses', {path: 'campuses/:campus_id'});
  this.route('candidates', function() {
    this.route('new');
    this.route('record', {path: ':candidate_id/records'});
    this.route('show', {path: ':candidate_id'});
  });
  this.route('event', {path: 'events/:event_id'}, function() {
    this.route('record', {path: 'records/:record_id'});
  });
});

export default Router;
