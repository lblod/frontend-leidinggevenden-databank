import Model, { attr } from '@ember-data/model';
import { collect } from '@ember/object/computed';

export default class Persoon extends Model {
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  @collect('id', 'achternaam', 'alternatieveNaam', 'gebruikteVoornaam') stringRep;

  @attr uri;
  @attr achternaam;
  @attr alternatieveNaam;
  @attr gebruikteVoornaam;

  get rdfaBindings(){
    return {
      class: "person:Person",
      achternaam: "foaf:familyName",
      alternatieveNaam: "foaf:name",
      gebruikteVoornaam: "persoon:gebruikteVoornaam",
      geboorte: "persoon:heeftGeboorte",
      identificator: "adms:identifier",
      geslacht: "persoon:geslacht"
    };
  }
}
