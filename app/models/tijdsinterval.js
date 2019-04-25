import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'begin', 'einde']),

  uri: attr(),
  begin: attr('datetime'),
  einde: attr('datetime'),

  rdfaBindings: Object.freeze({
    class: "dct:PeriodOfTime",
    begin: "generiek:begin",
    einde: "generiek:einde"
  })
});
