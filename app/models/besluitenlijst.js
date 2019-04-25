import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'inhoud']),

  uri: attr(),
  inhoud: attr(),
  publication: belongsTo('published-resource', { inverse: null }),
  besluiten: hasMany('besluit', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "ext:Besluitenlijst",
    inhoud: "prov:value",
    publication: "prov:wasDerivedFrom",
    besluiten: "ext:besluitenlijstBesluit"
  })
});
