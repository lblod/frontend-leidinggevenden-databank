import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'aantalOnthouders', 'aantalTegenstanders', 'aantalVoorstanders', 'geheim', 'title', 'gevolg', 'onderwerp']),

  uri: attr(),
  aantalOnthouders: attr(),
  aantalTegenstanders: attr(),
  aantalVoorstanders: attr(),
  geheim: attr(),
  title: attr(),
  gevolg: attr('language-string'),
  onderwerp: attr('language-string'),
  aanwezigen: hasMany('mandatari', { inverse: null }),
  onthouders: hasMany('mandatari', { inverse: null }),
  stemmers: hasMany('mandatari', { inverse: null }),
  tegenstanders: hasMany('mandatari', { inverse: null }),
  voorstanders: hasMany('mandatari', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Stemming",
    aantalOnthouders: "besluit:aantalOnthouders",
    aantalTegenstanders: "besluit:aantalTegenstanders",
    aantalVoorstanders: "besluit:aantalVoorstanders",
    geheim: "besluit:geheim",
    title: "dct:title",
    gevolg: "besluit:gevolg",
    onderwerp: "besluit:onderwerp",
    aanwezigen: "besluit:heeftAanwezige",
    onthouders: "besluit:heeftOnthouder",
    stemmers: "besluit:heeftStemmer",
    tegenstanders: "besluit:heeftTegenstander",
    voorstanders: "besluit:heeftVoorstander"
  })
});
