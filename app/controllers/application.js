import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class Application extends Controller {
  @service fastboot;

  get isFastBoot() {
    return this.fastboot.isFastBoot;
  }
}
