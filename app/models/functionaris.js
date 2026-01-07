import Model, { attr, belongsTo } from '@ember-data/model';

export default class Functionaris extends Model {
  @attr uri;
  @attr('datetime') start;
  @attr('datetime') einde;
  @belongsTo('bestuursfunctie', { async: true, inverse: null }) bekleedt;
  @belongsTo('functionaris-status-code', { async: true, inverse: null }) status;
  @belongsTo('persoon', { async: true, inverse: null }) isBestuurlijkeAliasVan;

  get isOngoing() {
    const now = new Date();
    return this.start <= now && (this.einde === undefined || this.einde >= now);
  }

  get rdfaBindings() {
    return {
      class: 'lblodlg:Functionaris',
      start: 'mandaat:start',
      einde: 'mandaat:einde',
      bekleedt: 'org:holds',
      status: 'mandaat:status',
      isBestuurlijkeAliasVan: 'mandaat:isBestuurlijkeAliasVan',
    };
  }
}
