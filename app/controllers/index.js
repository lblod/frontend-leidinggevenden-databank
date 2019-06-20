import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['bestuurseenheidId'],

  actions: {
    setBestuurseenheidId(value) {
      this.set('bestuurseenheidId', (value && value.id));
    }
  }
});
