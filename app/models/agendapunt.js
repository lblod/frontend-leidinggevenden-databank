import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'beschrijving', 'geplandOpenbaar', 'heeftOntwerpbesluit', 'titel', 'type', 'position']),

  uri: attr(),
  beschrijving: attr(),
  geplandOpenbaar: attr(),
  heeftOntwerpbesluit: attr(),
  titel: attr(),
  type: attr('uri-set'),
  position: attr(),
  vorigeAgendapunt: belongsTo('agendapunt', { inverse: null }),
  behandeling: belongsTo('behandeling-van-agendapunt', { inverse: null }),
  referenties: hasMany('agendapunt', { inverse: null }),
  publications: hasMany('published-resource', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Agendapunt",
    beschrijving: "dct:description",
    geplandOpenbaar: "besluit:geplandOpenbaar",
    heeftOntwerpbesluit: "besluit:heeftOntwerpbesluit",
    titel: "dct:title",
    type: "besluit:Agendapunt.type",
    position: "schema:position",
    vorigeAgendapunt: "besluit:aangebrachtNa",
    referenties: "dct:references",
    publications: "prov:wasDerivedFrom"
  })
});
