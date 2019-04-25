import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'naam', 'generatedFrom']),

  uri: attr(),
  naam: attr(),
  generatedFrom: attr('uri-set'),
  bestuurseenheid: belongsTo('bestuurseenheid', { inverse: null }),
  fractietype: belongsTo('fractietype', { inverse: null }),
  bestuursorganenInTijd: hasMany('bestuursorgaan', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:Fractie",
    naam: "regorg:legalName",
    generatedFrom: "ext:generatedFrom",
    bestuurseenheid: "org:linkedTo",
    fractietype: "ext:isFractietype",
    bestuursorganenInTijd: "org:memberOf"
  })
});
