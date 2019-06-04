import Controller from '@ember/controller';
import { computed }  from '@ember/object';

export default Controller.extend({
  sort: 'is-bestuurlijke-alias-van.achternaam',

  filteredModel: computed('model', function() {
    return this.model.filter(functionaris => functionaris.isOngoing);
  })
});

