import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'achternaam', 'alternatieveNaam', 'gebruikteVoornaam']),

  uri: attr(),
  achternaam: attr(),
  alternatieveNaam: attr(),
  gebruikteVoornaam: attr(),
  geboorte: belongsTo('geboorte', { inverse: null }),
  identificator: belongsTo('identificator', { inverse: null }),
  geslacht: belongsTo('geslacht-code', { inverse: null }),
  isAangesteldAls: hasMany('mandataris', { inverse: null }),
  isKandidaatVoor: hasMany('kandidatenlijst', { inverse: null }),
  verkiezingsresultaten: hasMany('verkiezingsresultaat', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "person:Person",
    achternaam: "foaf:familyName",
    alternatieveNaam: "foaf:name",
    gebruikteVoornaam: "persoon:gebruikteVoornaam",
    geboorte: "persoon:heeftGeboorte",
    identificator: "adms:identifier",
    geslacht: "persoon:geslacht"
  })
});
