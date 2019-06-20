import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    if (params.bestuurseenheidId) {
      this.controllerFor('index').set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', params.bestuurseenheidId));
    }
  }
});
