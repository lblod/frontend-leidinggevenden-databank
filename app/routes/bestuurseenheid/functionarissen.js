import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import _ from 'lodash';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Route.extend(DataTableRouteMixin, {
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),
  modelName: 'functionaris',

  mergeQueryOptions() {
    const bestuurseenheid = this.modelFor('bestuurseenheid');
    const midnight = `${new Date().toISOString().substr(0, 11)}00:00:00.000Z`;
    // We cannot filter on end date since end date must be in the future or undefined.
    // Hence, we filter on end date in the controller at the client-side
    if (this.isFastBoot) {
      return {
        include: [
          'bekleedt.rol',
          'is-bestuurlijke-alias-van',
          'status',
          'bekleedt.contactinfo.adres',
          'bekleedt.bevat-in.is-tijdsspecialisatie-van.bestuurseenheid'
        ].join(','),
        'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][:id:]': bestuurseenheid.id,
        'filter[:lte:start]': midnight
      };
    } else {
      return {
        include: [
          'bekleedt.rol',
          'is-bestuurlijke-alias-van',
          'status',
          'bekleedt.contactinfo'
        ].join(','),
        'filter[bekleedt][bevat-in][is-tijdsspecialisatie-van][bestuurseenheid][:id:]': bestuurseenheid.id,
        'filter[:lte:start]': midnight
      };
    }
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
