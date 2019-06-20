import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  queryParams: ['bestuurseenheidId'],

  actions: {
    setBestuurseenheid(value) {
      this.set('bestuurseenheid', value);
      this.set('bestuurseenheidId', (value && value.id));
    },

    displayLeidinggevenden() {
      this.router.transitionTo('bestuurseenheid.functionarissen', this.bestuurseenheid.id);
    }
  }
});
