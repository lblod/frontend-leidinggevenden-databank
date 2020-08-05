import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

export default class SelectBestuurseenheid extends Component {
  @service store;

  constructor() {
    super(...arguments);
    this.store.query('bestuurseenheid', {
      sort: 'naam',
      include: 'classificatie'
    }).then(options => {
      this.set('options', options);
    });
  }

  async didReceiveAttrs() {
    super.didReceiveAttrs(...arguments);
    if (this.value && !this.selected) {
      const bestuurseenheid = await this.store.findRecord('bestuurseenheid', this.value);
      this.set('selected', bestuurseenheid);
    } else if (!this.value) {
      this.set('selected', null);
    }
  }

  selected = null;
  value = null; // id of selected record
  onSelectionChange = null;

  @task
  *search(term) {
    console.log(term);
    yield timeout(600);
    return this.store.query('bestuurseenheid', {
      sort: 'naam',
      include: 'classificatie',
      filter: term
    });
  }

  @action
  changeSelected(selected) {
    this.set('selected', selected);
    this.onSelectionChange(selected);
  }

}
