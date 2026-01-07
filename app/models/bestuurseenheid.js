import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr uri;
  @attr naam;
  @attr('string') mailAdres;
  @attr('boolean') wilMailOntvangen;
  @belongsTo('bestuurseenheid-classificatie-code', {
    async: true,
    inverse: null,
  })
  classificatie;
  @hasMany('contact-punt', { async: true, inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { async: true, inverse: 'bestuurseenheid' })
  bestuursorganen;

  get rdfaBindings() {
    return {
      naam: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuurseenheid',
      werkingsgebied: 'http://data.vlaanderen.be/ns/besluit#werkingsgebied',
      bestuursorgaan: 'http://data.vlaanderen.be/ns/besluit#bestuurt',
      classificatie: 'http://data.vlaanderen.be/ns/besluit#classificatie',
    };
  }
}
