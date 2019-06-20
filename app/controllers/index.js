import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  queryParams: ['bestuurseenheidId'],

  actions: {
    setBestuurseenheidId(value) {
      this.set('bestuurseenheidId', (value && value.id));
    },

    displayLeidinggevenden() {
      this.router.transitionTo('bestuurseenheid.functionarissen', this.bestuurseenheidId);
    }
  }
});
