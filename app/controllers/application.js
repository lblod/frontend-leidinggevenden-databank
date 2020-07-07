import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import ENV from 'frontend-leidinggevenden-databank/config/environment';

export default class Application extends Controller {
  @service fastboot;
  constructor() {
    super(...arguments);
    this.set('header', ENV['vo-webuniversum']['header']);
    this.set('footer', ENV['vo-webuniversum']['footer']);
  }
  get isFastBoot() {
    return fastboot.isFastBoot;
  }
}
