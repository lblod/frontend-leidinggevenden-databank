import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id']),

  uri: attr(),
  binnenFractie: belongsTo('fractie', { inverse: null }),
  lid: belongsTo('mandataris', { inverse: null }),
  lidGedurende: belongsTo('tijdsinterval', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "org:Membership",
    binnenFractie: "org:organisation",
    lidGedurende: "org:memberDuring"
  })
});
