import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default class BestuursfunctieCode extends Model {
  @attr uri;
  @attr label;
  rdfaBindings = { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    class: "http://www.w3.org/2004/02/skos/core#Concept",
    label: "http://www.w3.org/2004/02/skos/core#prefLabel",
    scopeNote: "http://www.w3.org/2004/02/skos/core#scopeNote"
  }
}