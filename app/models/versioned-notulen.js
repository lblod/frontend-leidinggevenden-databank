import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'state', 'content', 'publicContent', 'publicBehandelingen', 'kind']),

  uri: attr(),
  state: attr(),
  content: attr(),
  publicContent: attr(),
  publicBehandelingen: attr('uri-set'),
  kind: attr(),
  publishedResource: belongsTo('published-resource', { inverse: null }),
  editorDocument: belongsTo('editor-document', { inverse: null }),
  documentContainer: belongsTo('document-container', { inverse: null }),
  signedResources: hasMany('signed-resource', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "ext:VersionedNotulen",
    state: "ext:stateString",
    content: "ext:content",
    publicContent: "ext:publicContent",
    publicBehandelingen: "ext:publicBehandeling",
    kind: "ext:notulenKind",
    editorDocument: "prov:wasDerivedFrom"
  })
});
