import Model, { attr } from '@ember-data/model';

export default class Persoon extends Model {
  @attr uri;
  @attr achternaam;
  @attr alternatieveNaam;
  @attr gebruikteVoornaam;

  get rdfaBindings() {
    return {
      class: 'person:Person',
      achternaam: 'foaf:familyName',
      alternatieveNaam: 'foaf:name',
      gebruikteVoornaam: 'persoon:gebruikteVoornaam',
      geboorte: 'persoon:heeftGeboorte',
      identificator: 'adms:identifier',
      geslacht: 'persoon:geslacht',
    };
  }
}
