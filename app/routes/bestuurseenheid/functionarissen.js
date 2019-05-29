import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin, {
  modelName: 'functionaris',
  bestuurseenheidId: null,

  mergeQueryOptions(params) {
    this.set('bestuurseenheidId', params.bestuureenheid_id);
    return {
    };
  },
  
  async setupController(controller, model) {
    this._super(controller, model);
    controller.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.bestuurseenheidId));
  }
});
