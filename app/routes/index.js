import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if (params.bestuurseenheidId) {
      this.controllerFor('index').set('bestuurseenheid', this.store.findRecord('bestuurseenheid', params.bestuurseenheidId));
    }
  }
});
