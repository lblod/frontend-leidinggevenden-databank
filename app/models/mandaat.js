import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'aantalHouders']),

  uri: attr(),
  aantalHouders: attr(),
  bestuursfunctie: belongsTo('bestuursfunctie-code', { inverse: null }),
  bevatIn: hasMany('bestuursorgaan', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:Mandaat",
    aantalHouders: "mandaat:aantalHouders",
    bestuursfunctie: "org:role"
  })
});
