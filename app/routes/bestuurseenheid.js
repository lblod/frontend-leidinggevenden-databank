import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Bestuurseenheid extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('bestuurseenheid', params.bestuurseenheid_id);
  }
}
