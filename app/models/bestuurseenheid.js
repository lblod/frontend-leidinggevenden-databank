import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam', 'wilMailOntvangen', 'mailAdres']),

  uri: attr(),
  naam: attr(),
  wilMailOntvangen: attr(),
  mailAdres: attr(),
  werkingsgebied: belongsTo('werkingsgebied', { inverse: null }),
  classificatie: belongsTo('bestuurseenheid-classificatie-code', { inverse: null }),
  primaireSite: belongsTo('vestiging', { inverse: null }),
  contactinfo: hasMany('contact-punt', { inverse: null }),
  posities: hasMany('positie', { inverse: null }),
  bestuursorganen: hasMany('bestuursorgaan', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Bestuurseenheid",
    naam: "skos:prefLabel",
    wilMailOntvangen: "ext:wilMailOntvangen",
    mailAdres: "ext:mailAdresVoorNotificaties",
    werkingsgebied: "besluit:werkingsgebied",
    classificatie: "besluit:classificatie",
    primaireSite: "org:hasPrimarySite",
    contactinfo: "schema:contactPoint",
    posities: "org:hasPost"
  })
});
