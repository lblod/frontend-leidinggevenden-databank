import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class Bestuursfunctie extends Model {
  @attr uri;
  @belongsTo('bestuursfunctie-code', { async: true, inverse: null }) rol;
  @belongsTo('contact-punt', { async: true, inverse: null }) contactinfo;
  @hasMany('bestuursorgaan', { async: true, inverse: null }) bevatIn;

  get rdfaBindings() {
    return {
      class: 'lblodlg:Bestuursfunctie',
      rol: 'org:role',
      contactinfo: 'schema:contactPoint',
    };
  }
}
