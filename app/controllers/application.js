import Controller from '@ember/controller';
import ENV from 'frontend-leidinggevenden-databank/config/environment';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('header', ENV['vo-webuniversum']['header']);
    this.set('footer', ENV['vo-webuniversum']['footer']);
  }
});
