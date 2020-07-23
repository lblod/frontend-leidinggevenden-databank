import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { task, restartableTask } from 'ember-concurrency-decorators';

export default class SelectBestuurseenheid extends Component {
  @service store;
  @tracked selected = null;
  @tracked options;

  constructor() {
    super(...arguments);
    this.loadData.perform();
  }

  @task
  * loadData() {
    const options = yield this.store.query('bestuurseenheid', {
      sort: 'naam',
      include: 'classificatie'
    });
    this.options = options;

    this.updateSelectedValue();
  }

  
  value = null; // id of selected record
  onSelectionChange = null;

  @restartableTask
  *search(term) {
    yield timeout(600);
    return this.store.query('bestuurseenheid', {
      sort: 'naam',
      include: 'classificatie',
      filter: term
    });
  }

  @action
  async updateSelectedValue() {
    if (this.args.value && !this.selected) {
        this.selected = await this.store.query('bestuurseenheid', this.args.value);
    } else if (!this.args.value) {
      this.selected = null;
    }
  }

  @action
  changeSelected(selected) {
    this.selected = selected;
    this.args.onSelectionChange(selected);
  }

}
