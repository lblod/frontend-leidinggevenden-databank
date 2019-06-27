import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bestuurseenheid', { path: "/bestuurseenheden/:bestuurseenheid_id" }, function() {
    this.route('functionarissen');
  });
  this.route('route-not-found', {
    path: '/*wildcard'
  });
});

export default Router;
