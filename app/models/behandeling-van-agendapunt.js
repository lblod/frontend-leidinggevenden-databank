import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'openbaar', 'gevolg', 'afgeleidUit', 'position']),

  uri: attr(),
  openbaar: attr(),
  gevolg: attr('language-string'),
  afgeleidUit: attr(),
  position: attr(),
  vorigeBehandelingVanAgendapunt: belongsTo('behandeling-van-agendapunt', { inverse: null }),
  onderwerp: belongsTo('agendapunt', { inverse: null }),
  secretaris: belongsTo('mandataris', { inverse: null }),
  voorzitter: belongsTo('mandataris', { inverse: null }),
  besluiten: hasMany('besluit', { inverse: null }),
  aanwezigen: hasMany('mandataris', { inverse: null }),
  stemmingen: hasMany('stemming', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:BehandelingVanAgendapunt",
    openbaar: "besluit:openbaar",
    gevolg: "besluit:gevolg",
    afgeleidUit: "pav:derivedFrom",
    position: "schema:position",
    vorigeBehandelingVanAgendapunt: "besluit:gebeurtNa",
    onderwerp: "dct:subject",
    secretaris: "besluit:heeftSecretaris",
    voorzitter: "besluit:heeftVoorzitter",
    besluiten: "prov:generated",
    aanwezigen: "besluit:heeftAanwezige",
    stemmingen: "besluit:heeftStemming"
  })
});
