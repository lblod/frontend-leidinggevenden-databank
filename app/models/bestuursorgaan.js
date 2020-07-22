import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class Bestuurorgaan extends Model {
  @attr uri;
  @attr naam;
  @attr('date') bindingStart;
  @attr('date') bindingEinde;
  @belongsTo('bestuurseenheid', { inverse: 'bestuursorganen' }) bestuurseenheid;
  @belongsTo('bestuursorgaan-classificatie-code', { inverse: null }) classificatie;
  @belongsTo('bestuursorgaan', { inverse: 'heeftTijdsspecialisaties' }) isTijdsspecialisatieVan;
  @hasMany('bestuursorgaan', { inverse: 'isTijdsspecialisatieVan' }) heeftTijdsspecialisaties;

  rdfaBindings = { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    naam: "http://www.w3.org/2004/02/skos/core#prefLabel",
    class: "http://data.vlaanderen.be/ns/besluit#Bestuursorgaan",
    bindingStart: "http://data.vlaanderen.be/ns/mandaat#bindingStart",
    bindingEinde: "http://data.vlaanderen.be/ns/mandaat#bindingEinde",
    bestuurseenheid: "http://data.vlaanderen.be/ns/besluit#bestuurt",
    classificatie: "http://data.vlaanderen.be/ns/besluit#classificatie",
    isTijdsspecialisatieVan: "http://data.vlaanderen.be/ns/mandaat#isTijdspecialisatieVan",
    bevat: "http://www.w3.org/ns/org#hasPost"
  }
}