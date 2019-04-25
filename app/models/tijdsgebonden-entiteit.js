import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'bindingEinde', 'bindingStart']),

  uri: attr(),
  bindingEinde: attr('date'),
  bindingStart: attr('date'),
  isTijdsspecialisatieVan: belongsTo('entiteit', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:TijdsgebondenEntiteit",
    bindingEinde: "mandaat:bindingEinde",
    bindingStart: "mandaat:bindingStart",
    isTijdsspecialisatieVan: "mandaat:isTijdsspecialisatieVan"
  })
});
