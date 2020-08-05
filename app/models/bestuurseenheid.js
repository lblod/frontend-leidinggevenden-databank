import Model, { belongsTo, hasMany, attr } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class Bestuurseenheid extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect('id', 'naam', 'wilMailOntvangen', 'mailAdres') stringRep;

  @attr uri;
  @attr naam;
  @attr('string') mailAdres;
  @attr('boolean') wilMailOntvangen;
  @belongsTo('bestuurseenheid-classificatie-code', { inverse: null }) classificatie;
  @hasMany('contact-punt', { inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { inverse: 'bestuurseenheid' }) bestuursorganen;
  get rdfaBindings(){
    return { 
      naam: "http://www.w3.org/2004/02/skos/core#prefLabel",
      class: "http://data.vlaanderen.be/ns/besluit#Bestuurseenheid",
      werkingsgebied: "http://data.vlaanderen.be/ns/besluit#werkingsgebied",
      bestuursorgaan: "http://data.vlaanderen.be/ns/besluit#bestuurt",
      classificatie: "http://data.vlaanderen.be/ns/besluit#classificatie"
    };
  }
}