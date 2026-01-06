import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class Bestuursfunctie extends Model {
  @attr uri;
  @belongsTo('bestuursfunctie-code', { inverse: null }) rol;
  @belongsTo('contact-punt', { inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { inverse: null }) bevatIn;

  get rdfaBindings() {
    return {
      class: 'lblodlg:Bestuursfunctie',
      rol: 'org:role',
      contactinfo: 'schema:contactPoint',
    };
  }
}
