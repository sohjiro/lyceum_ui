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
  this.route('event', {path: '/event/:event_id'}, function() {
    this.route('candidates');
    this.route('candidate', {path: '/candidate/:candidate_id'});
  });
  this.route('subjects', function() {
    this.route('new');
  });
});

export default Router;
