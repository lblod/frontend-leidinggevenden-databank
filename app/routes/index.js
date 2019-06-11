import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: false }
  },

  model(params) {
    this.set('id', params.bestuurseenheidId);
  },

  async setupController(controller) {
    if (this.id) {
      controller.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.id));
    }
  }
});
