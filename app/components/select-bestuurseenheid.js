import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { timeout } from 'ember-concurrency';
import { dropTask, task, restartableTask } from 'ember-concurrency-decorators';

export default class SelectBestuurseenheid extends Component {
  @service store;
  @tracked selected = null;
  @tracked exampleOptions = [];
  @tracked searchData;

  constructor() {
    super(...arguments);
    this.loadData.perform();
  }

  get isSearching() {
    return Boolean(this.searchData);
  }

  get options() {
    return this.isSearching ? this.searchData.results : this.exampleOptions;
  }

  @task
  *loadData() {
    this.exampleOptions = yield this.fetchBestuurseenheden();
    this.updateSelectedValue();
  }

  @restartableTask
  *search(term) {
    yield timeout(600);

    let result = yield this.fetchBestuurseenheden({
      filter: term,
    });

    this.searchData = new SearchData({
      totalResultAmount: result.meta.count,
      searchTerm: term,
      results: result.toArray(),
    });
  }

  @dropTask
  *loadMoreSearchResults() {
    if (this.isSearching) {
      let results = yield this.fetchBestuurseenheden({
        filter: this.searchData.searchTerm,
        "page[number]": ++this.searchData.currentPage,
      });

      this.searchData.addSearchResults(results.toArray());
    }
  }

  @action
  async updateSelectedValue() {
    if (this.args.value && !this.selected) {
      this.selected = await this.store.findRecord('bestuurseenheid', this.args.value);
    } else if (!this.args.value) {
      this.selected = null;
    }
  }

  @action
  changeSelected(selected) {
    this.selected = selected;
    this.args.onSelectionChange(selected);
  }

  @action
  registerAPI(api) {
    if (!api.searchText && this.searchData) {
      this.searchData = null;
    }
  }

  async fetchBestuurseenheden(searchQuery = {}) {
    return this.store.query("bestuurseenheid", {
      sort: "naam",
      include: "classificatie",
      "page[number]": 0,
      ...searchQuery,
    });
  }
}

class SearchData {
  @tracked results = [];
  currentPage = 0;

  constructor({ totalResultAmount, searchTerm, results }) {
    this.totalResultAmount = totalResultAmount;
    this.searchTerm = searchTerm;
    this.results = results;
  }

  get canLoadMoreSearchResults() {
    return this.totalResultAmount > this.results.length;
  }

  addSearchResults(newResults = []) {
    this.results = [...this.results, ...newResults];
  }
}
