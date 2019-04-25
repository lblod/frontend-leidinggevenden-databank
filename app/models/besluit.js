import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'beschrijving', 'citeeropschrift', 'motivering', 'publicatiedatum', 'inhoud', 'taal', 'titel', 'score']),

  uri: attr(),
  beschrijving: attr(),
  citeeropschrift: attr(),
  motivering: attr('language-string'),
  publicatiedatum: attr('date'),
  inhoud: attr(),
  taal: attr(),
  titel: attr(),
  score: attr(),
  realisatie: belongsTo('rechtsgrond-besluit', { inverse: null }),
  volgendUitBehandelingVanAgendapunt: belongsTo('behandeling-van-agendapunt', { inverse: null }),
  publications: hasMany('published-resource', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "besluit:Besluit",
    beschrijving: "eli:description",
    citeeropschrift: "eli:title_short",
    motivering: "besluit:motivering",
    publicatiedatum: "eli:date_publication",
    inhoud: "prov:value",
    taal: "eli:language",
    titel: "eli:title",
    score: "nao:score",
    realisatie: "eli:realizes",
    publications: "prov:wasDerivedFrom"
  })
});
