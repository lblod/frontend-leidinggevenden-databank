import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam', 'bindingEinde', 'bindingStart']),

  uri: attr(),
  naam: attr(),
  bindingEinde: attr('date'),
  bindingStart: attr('date'),
  bestuurseenheid: belongsTo('bestuurseenheid', { inverse: null }),
  classificatie: belongsTo('bestuursorgaan-classificatie-code', { inverse: null }),
  isTijdsspecialisatieVan: belongsTo('bestuursorgaan', { inverse: null }),
  wordtSamengesteldDoor: belongsTo('rechtstreekse-verkiezing', { inverse: null }),
  heeftTijdsspecialisaties: hasMany('bestuursorgaan', { inverse: null }),
  bevat: hasMany('mandaat', { inverse: null }),
  bevatFunctionaris: hasMany('bestuursfunctie', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Bestuursorgaan",
    naam: "skos:prefLabel",
    bindingEinde: "mandaat:bindingEinde",
    bindingStart: "mandaat:bindingStart",
    bestuurseenheid: "besluit:bestuurt",
    classificatie: "besluit:classificatie",
    isTijdsspecialisatieVan: "mandaat:isTijdspecialisatieVan",
    bevat: "org:hasPost",
    bevatFunctionaris: "lblodlg:heeftBestuursfunctie"
  })
});
