import Model, { hasMany, attr } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class BestuursorgaanClassificatieCode  extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect('id', 'label', 'scopeNote') stringRep;

  @attr uri;
  @attr label;
  @attr scopeNote;
  @hasMany('bestuursfunctie-code', { inverse: null }) standaardType;

  get rdfaBindings(){
    return {
      class: "ext:BestuursorgaanClassificatieCode",
      label: "skos:prefLabel",
      scopeNote: "skos:scopeNote",
      standaardType: "ext:hasDefaultType"
    };
  }
}
