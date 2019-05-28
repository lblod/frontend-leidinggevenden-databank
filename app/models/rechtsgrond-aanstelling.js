import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'buitenwerkingtreding', 'inwekingtreding', 'typeDocument']),

  uri: attr(),
  buitenwerkingtreding: attr('date'),
  inwekingtreding: attr('date'),
  typeDocument: attr('uri-set'),
  bekrachtigtAanstellingenVan: hasMany('mandataris', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:RechtsgrondAanstelling",
    buitenwerkingtreding: "eli:date_no_longer_in_force",
    inwekingtreding: "eli:first_date_entry_in_force",
    typeDocument: "eli:type_document"
  })
});
