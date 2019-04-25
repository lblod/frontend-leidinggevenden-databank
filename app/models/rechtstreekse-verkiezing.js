import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'datum', 'geldigheid']),

  uri: attr(),
  datum: attr('date'),
  geldigheid: attr('date'),
  steltSamen: belongsTo('bestuursorgaan', { inverse: null }),
  heeftLijst: hasMany('kandidatenlijst', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:RechtstreekseVerkiezing",
    datum: "mandaat:datum",
    geldigheid: "dct:valid",
    steltSamen: "mandaat:steltSamen"
  })
});
