import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'nummer', 'inhoud', 'taal', 'titel', 'page', 'score']),

  uri: attr(),
  nummer: attr(),
  inhoud: attr(),
  taal: attr(),
  titel: attr(),
  page: attr(),
  score: attr(),
  realisatie: belongsTo('rechtsgrond-artikel', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Artikel",
    nummer: "eli:number",
    inhoud: "prov:value",
    taal: "eli:language",
    titel: "eli:title",
    page: "foaf:page",
    score: "nao:score",
    realisatie: "eli:realizes"
  })
});
