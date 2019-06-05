import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: true }
  },

  model(params) {
    this.set('id', params.bestuurseenheidId || '');
  },

  async setupController(controller, model) {
    if (this.id != '') {
      controller.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.id));
    }
  }
});
