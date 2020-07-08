import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default class Adres extends Model {
  @attr uri;
  @attr busnummer;
  @attr huisnummer;
  @attr straatnaam;
  @attr postcode;
  @attr gemeentenaam;
  @attr land;
  @attr volledigAdres;
  @attr adresRegisterId;
  @attr adresRegisterUri;
  rdfaBindings = Object.freeze({
    class: "locn:Address",
    busnummer: "adres:Adresvoorstelling.busnummer",
    huisnummer: "adres:AdresVoorstelling.huisnummer",
    straatnaam: "locn:thoroughfare",
    postcode: "locn:postCode",
    gemeentenaam: "adres:gemeentenaam",
    land: "adres:land",
    volledigAdres : "locn:fullAddress",
    adresRegisterId: "lblodlg:adresRegisterId",
    adresRegisterUri: "adres:verwijstNaar"
  })
}
