import Model, { attr } from '@ember-data/model';

export default class FunctionarisStatusCode extends Model {
  @attr uri;
  @attr label;
  @attr scopeNote;

  get rdfaBindings() {
    return {
      class: 'lblodlg:FunctionarisStatusCode',
      label: 'skos:prefLabel',
      scopeNote: 'skos:scopeNote',
    };
  }
}
