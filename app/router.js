import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });
  this.route('bestuurseenheid', { path: ":bestuurseenheid_id" }, function() {
    this.route('functionarissen');
  });
});

export default Router;
