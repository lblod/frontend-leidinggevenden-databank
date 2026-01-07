import Model, { hasMany, attr } from '@ember-data/model';

export default class BestuursorgaanClassificatieCode extends Model {
  @attr uri;
  @attr label;
  @attr scopeNote;
  @hasMany('bestuursfunctie-code', { async: true, inverse: null })
  standaardType;

  get rdfaBindings() {
    return {
      class: 'ext:BestuursorgaanClassificatieCode',
      label: 'skos:prefLabel',
      scopeNote: 'skos:scopeNote',
      standaardType: 'ext:hasDefaultType',
    };
  }
}
