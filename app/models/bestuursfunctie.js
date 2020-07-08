import Model, { belongsTo, hasMany, attr } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class Bestuursfunctie extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect.apply(this,['id']) stringRep;

  @attr uri;
  @belongsTo('bestuursfunctie-code', { inverse: null }) rol;
  @belongsTo('contact-punt', { inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { inverse: null }) bevatIn;

  rdfaBindings = Object.freeze({
    class: "lblodlg:Bestuursfunctie",
    rol: "org:role",
    contactinfo: "schema:contactPoint"
  })
}