import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    bestuurseenheidId: { refreshModel: true }
  },

  model(params) {
    return {
      id: params.bestuurseenheidId || ''
    };
  }
});
