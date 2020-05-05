import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('bestuurseenheid', { path: "/bestuurseenheden/:bestuurseenheid_id" }, function() {
    this.route('functionarissen');
  });
  this.route('legaal', function() {
    this.route('disclaimer');
    this.route('cookieverklaring');
  });
  this.route('contact');
  this.route('route-not-found', {
    path: '/*wildcard'
  });
});
