import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default Controller.extend(DefaultQueryParamsMixin, {
  sort: 'is-bestuurlijke-alias-van.achternaam',
  size: 1000, // make sure to load enough functionarissen since we filter in the frontend

  filteredModel: computed('model', function() {
    return this.model.filter(functionaris => functionaris.isOngoing);
  })
});
