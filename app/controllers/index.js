import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Index extends Controller {
  queryParams = ['bestuurseenheidId']

  @action
  setBestuurseenheidId(value) {
    this.set('bestuurseenheidId', (value && value.id));
  }
}
