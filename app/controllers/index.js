import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    setBestuurseenheid(value) {
      this.set('bestuurseenheid', value);
      this.set('bestuurseenheidId', (value && value.id) || '');
    }
  }
});
