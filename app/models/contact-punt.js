import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'aanschrijfprefix', 'email', 'telefoon', 'fax', 'naam', 'website']),

  uri: attr(),
  aanschrijfprefix: attr(),
  email: attr(),
  fax: attr(),
  naam: attr(),
  website: attr(),
  telefoon: attr(),
  adres: belongsTo('adres', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:ContactPoint",
    aanschrijfprefix: "vcard:honorific-prefix",
    email: "schema:email",
    fax: "schema:faxNumber",
    naam: "foaf:name",
    website: "foaf:page",
    telefoon: "schema:telephone",
    adres: "locn:address"
  })
});
