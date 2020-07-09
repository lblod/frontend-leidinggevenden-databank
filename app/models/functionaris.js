import Model, { attr, belongsTo } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class Functionaris extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect('id', 'start', 'einde') stringRep;

  @attr uri;
  @attr('datetime') start;
  @attr('datetime') einde;
  @belongsTo('bestuursfunctie', { inverse: null }) bekleedt;
  @belongsTo('functionaris-status-code', { inverse: null }) status;
  @belongsTo('persoon', { inverse: null }) isBestuurlijkeAliasVan;

  get isOngoing() {
    const now = new Date();
    return this.start <= now && (this.einde === undefined || this.einde >= now);
  }

  rdfaBindings = Object.freeze({
    class: "lblodlg:Functionaris",
    start: "mandaat:start",
    einde: "mandaat:einde",
    bekleedt: "org:holds",
    status: "mandaat:status",
    isBestuurlijkeAliasVan: "mandaat:isBestuurlijkeAliasVan"
  })
}

