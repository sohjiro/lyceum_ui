import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('event', function() {
    this.route('new');
    this.route('candidates', {path: ":id/candidates"});
  });
});

export default Router;
