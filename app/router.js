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
  this.route('bestuursorgaan', function() {
    this.route('functionarissen', {path: ":bestuureenheid_id/functionarissen"});
  });
});

export default Router;
