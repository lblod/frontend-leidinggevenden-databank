import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'busnummer', 'huisnummer', 'straatnaam', 'postcode',  'gemeente', 'land', 'volledigAdres', 'adresRegisterId', 'adresRegisterUri']),

  busnummer: attr(),
  huisnummer: attr(),
  straatnaam: attr(),
  postcode: attr(),
  gemeentenaam: attr(),
  land: attr(),
  volledigAdres : attr(),
  adresRegisterId: attr(),
  adresRegisterUri: attr(),

  rdfaBindings: Object.freeze({
    class: "locn:Address",
    busnummer: "adres:Adresvoorstelling.busnummer",
    huisnummer: "adres:AdresVoorstelling.huisnummer",
    straatnaam: "locn:thoroughfare",
    postcode: "locn:postCode",
    gemeentenaam: "adres:gemeentenaam",
    land: "adres:land",
    volledigAdres : "locn:fullAddress",
    adresRegisterId: "lblodlg:adresRegisterId",
    adresRegisterUri: "lblodlg:adresRegisterUri"
  })
});
