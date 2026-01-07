import Controller from '@ember/controller';

export default class FunctionarissenController extends Controller {
  sort = 'is-bestuurlijke-alias-van.achternaam';
  page = 0;
  size = 1000;

  get filteredModel() {
    const content = this.model.filter((functionaris) => functionaris.isOngoing);
    content.meta = {
      count: content.length, // NOTE: need to assign this to make the total visible
    };
    return content;
  }
}
