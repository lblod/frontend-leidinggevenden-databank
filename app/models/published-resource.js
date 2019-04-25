import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'content', 'hashValue', 'createdOn']),

  uri: attr(),
  content: attr(),
  hashValue: attr(),
  createdOn: attr('datetime'),
  status: belongsTo('blockchain-status', { inverse: null }),
  versionedAgenda: belongsTo('versioned-agenda', { inverse: null }),
  versionedBesluitenLijst: belongsTo('versioned-besluiten-lijst', { inverse: null }),
  versionedNotulen: belongsTo('versioned-notulen', { inverse: null }),
  gebruiker: belongsTo('gebruiker', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "sign:PublishedResource",
    content: "sign:text",
    hashValue: "sign:hashValue",
    createdOn: "dct:created",
    status: "sign:status",
    versionedAgenda: "ext:publishesAgenda",
    versionedBesluitenLijst: "ext:publishedBesluitenlijst",
    versionedNotulen: "ext:publishNotulen",
    gebruiker: "sign:signatory"
  })
});
