import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default class ContactPunt extends Model {
  @attr uri;
  @attr aanschrijfprefix;
  @attr email;
  @attr fax;
  @attr naam;
  @attr website;
  @attr telefoon;
  @belongsTo('adres', { inverse: null }) adres;

  rdfaBindings = Object.freeze({
    class: "schema:ContactPoint",
    aanschrijfprefix: "vcard:honorific-prefix",
    email: "schema:email",
    fax: "schema:faxNumber",
    naam: "foaf:name",
    website: "foaf:page",
    telefoon: "schema:telephone",
    adres: "locn:address"
  })
}