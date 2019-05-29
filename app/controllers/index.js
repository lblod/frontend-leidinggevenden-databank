import Controller from '@ember/controller';

export default Controller.extend({
  bestuurseenheidId: '',
  bestuurseenheid: null,

  actions: {
    setBestuurseenheid(value) {
      this.set('bestuurseenheid', value);
      this.set('bestuurseenheidId', value.id);
    }
  }
});
