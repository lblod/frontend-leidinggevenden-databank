import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: false }
  },

  async model(params) {
    this.set('id', params.bestuurseenheidId);
    if (this.id) {
      controller.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.id));
    }
  }
});
