import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'lijstnaam', 'lijstnummer']),

  uri: attr(),
  lijstnaam: attr(),
  lijstnummer: attr(),
  lijsttype: belongsTo('lijsttype', { inverse: null }),
  rechtstreekseVerkiezing: belongsTo('rechtstreekse-verkiezing', { inverse: null }),
  kandidaten: hasMany('persoon', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:Kandidatenlijst",
    lijstnaam: "skos:prefLabel",
    lijstnummer: "mandaat:lijstnummer",
    lijsttype: "mandaat:lijsttype",
    rechtstreekseVerkiezing: "mandaat:behoortTot",
    kandidaten: "mandaat:heeftKandidaat"
  })
});
