import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import _ from 'lodash';
import { inject as service } from '@ember/service';

export default Route.extend(DataTableRouteMixin, {
  fastboot: service(),
  modelName: 'functionaris',
  bestuurseenheidId: null,

  mergeQueryOptions(params) {
    this.set('bestuurseenheidId', params.bestuureenheid_id);
    return {
      'include': 'bekleedt.rol,is-bestuurlijke-alias-van,status,bekleedt.contactinfo',
      'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][:id:]': params.bestuureenheid_id
    };
  },

  async setupController(controller, model) {
    this._super(controller, model);
    controller.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.bestuurseenheidId));

  },

  async afterModel(model) {
    if (this.fastboot.isFastBoot) {
      this.set('bestuurseenheid', await this.store.findRecord('bestuurseenheid', this.bestuurseenheidId));
    }
  },

  /*********************************************************************************
   * Temporary workaround fastboot and ember-data-table/addon/mixins/route.js
   * We keep these here, as we want to experiment on how to tackle fastboot issues.
   * Effective code changes will be preceded by //--- FASTBOOT WORKAROUND ---//
   *********************************************************************************/
  model(params) {
    const options = {
        sort: params.sort,
        page: {
          number: params.page,
          size: params.size
        }
    };
    // TODO: sending an empty filter param to backend returns []
    if (params.filter) { options['filter'] = params.filter; }


    //--- FASTBOOT WORKAROUND ---//

    //previous code

    // $.extend(options, this.mergeQueryOptions(params));

    // $.extend is complex, so opted to use lodash
    _.merge(options, this.mergeQueryOptions(params));


    return this.get('store').query(this.get('modelName'), options);
  }

  /*********************************************************************************
   * end workaround
  *********************************************************************************/
});
