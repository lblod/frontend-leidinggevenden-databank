import Model, { attr } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class FunctionarisStatusCode extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect('id', 'label', 'scopeNote') stringRep;

  @attr uri;
  @attr label;
  @attr scopeNote;

  rdfaBindings = Object.freeze({
    class: "lblodlg:FunctionarisStatusCode",
    label: "skos:prefLabel",
    scopeNote: "skos:scopeNote"
  })
}
