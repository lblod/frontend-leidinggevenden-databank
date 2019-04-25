import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam', 'niveau']),

  uri: attr(),
  naam: attr(),
  niveau: attr(),
  bestuurseenheid: hasMany('bestuurseenheid', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "prov:Location",
    naam: "rdfs:label",
    niveau: "ext:werkingsgebiedNiveau"
  })
});
