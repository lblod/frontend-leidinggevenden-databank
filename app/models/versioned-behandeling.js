import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'state', 'content']),

  uri: attr(),
  state: attr(),
  content: attr(),
  publishedResource: belongsTo('published-resource', { inverse: null }),
  editorDocument: belongsTo('editor-document', { inverse: null }),
  documentContainer: belongsTo('document-container', { inverse: null }),
  behandeling: belongsTo('behandeling-van-agendapunt', { inverse: null }),
  signedResources: hasMany('signed-resource', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "ext:VersionedBehandeling",
    state: "ext:stateString",
    content: "ext:content",
    editorDocument: "prov:wasDerivedFrom",
    behandeling: "ext:behandeling"
  })
});
