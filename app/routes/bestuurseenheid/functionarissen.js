import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import _ from 'lodash';
import { inject as service } from '@ember/service';

export default Route.extend(DataTableRouteMixin, {
  fastboot: service(),
  modelName: 'functionaris',

  mergeQueryOptions() {
    const bestuurseenheid = this.modelFor('bestuurseenheid');
    return {
      'include': 'bekleedt.rol,is-bestuurlijke-alias-van,status,bekleedt.contactinfo',
      'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][:id:]': bestuurseenheid.id
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('bestuurseenheid', this.modelFor('bestuurseenheid'));
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


    return this.store.query(this.modelName, options);
  }

  /*********************************************************************************
   * end workaround
  *********************************************************************************/
});
