import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'geplandeStart', 'gestartOpTijdstip', 'geeindigdOpTijdstip', 'opLocatie']),

  uri: attr(),
  geplandeStart: attr('datetime'),
  gestartOpTijdstip: attr('datetime'),
  geeindigdOpTijdstip: attr('datetime'),
  opLocatie: attr(),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: null }),
  secretaris: belongsTo('mandataris', { inverse: null }),
  voorzitter: belongsTo('mandataris', { inverse: null }),
  notulen: belongsTo('notulen', { inverse: null }),
  besluitenlijst: belongsTo('besluitenlijst', { inverse: null }),
  aanwezigenBijStart: hasMany('mandataris', { inverse: null }),
  agendapunten: hasMany('agendapunt', { inverse: null }),
  uittreksels: hasMany('uittreksel', { inverse: null }),
  agendas: hasMany('agenda', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Zitting",
    geplandeStart: "besluit:geplandeStart",
    gestartOpTijdstip: "prov:startedAtTime",
    geeindigdOpTijdstip: "prov:endedAtTime",
    opLocatie: "prov:atLocation",
    bestuursorgaan: "besluit:isGehoudenDoor",
    secretaris: "besluit:heeftSecretaris",
    voorzitter: "besluit:heeftVoorzitter",
    notulen: "besluit:heeftNotulen",
    besluitenlijst: "ext:besluitenlijst",
    aanwezigenBijStart: "besluit:heeftAanwezigeBijStart",
    agendapunten: "besluit:behandelt",
    uittreksels: "ext:uittreksel",
    agendas: "ext:agenda"
  })
});
