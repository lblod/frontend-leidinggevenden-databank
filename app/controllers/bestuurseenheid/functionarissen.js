import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default Controller.extend(DefaultQueryParamsMixin, {
  sort: 'is-bestuurlijke-alias-van.achternaam',
  page: 0,
  size: 1000,

  filteredModel: computed('model', function() {
    const content = this.model.filter(functionaris => functionaris.isOngoing);
    content.meta = {
      count: content.length // NOTE: need to assign this to make the total visible
    }
    return content;
  })
});
