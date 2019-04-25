import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'datum']),

  uri: attr(),
  datum: attr('date'),

  rdfaBindings: Object.freeze({
    class: "persoon:Geboorte",
    datum: "persoon:datum"
  })
});
