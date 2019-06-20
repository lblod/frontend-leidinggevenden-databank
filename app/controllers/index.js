import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['bestuurseenheidId'],

  actions: {
    setBestuurseenheidId(value) {
      this.set('bestuurseenheidId', (value && value.id));
    }
  }
});
