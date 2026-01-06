import Model, { attr } from '@ember-data/model';

export default class BestuurseenheidClassificatieCode extends Model {
  @attr uri;
  @attr label;
  @attr scopeNote;

  get rdfaBindings() {
    return {
      class: 'ext:BestuurseenheidClassificatieCode',
      label: 'skos:prefLabel',
      scopeNote: 'skos:scopeNote',
    };
  }
}
