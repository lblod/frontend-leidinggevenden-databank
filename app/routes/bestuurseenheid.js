import Route from '@ember/routing/route';

export default class Bestuurseenheid extends Route {
  model(params) {
    return this.store.findRecord('bestuurseenheid', params.bestuurseenheid_id);
  }
}
