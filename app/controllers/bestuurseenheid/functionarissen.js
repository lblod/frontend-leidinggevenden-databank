import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-mixins
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default class FunctionarissenController extends Controller.extend(
  DefaultQueryParamsMixin
) {
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
