import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'buitenwerkingtreding', 'inwerkingtreding']),

  uri: attr(),
  buitenwerkingtreding: attr('date'),
  inwerkingtreding: attr('date'),
  bestuursorgaan: belongsTo('bestuursorgaan', { inverse: null }),
  rechtsgrondenArtikel: hasMany('rechtsgrond-artikel', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "eli:LegalResource",
    buitenwerkingtreding: "eli:date_no_longer_in_force",
    inwerkingtreding: "eli:first_date_entry_in_force",
    bestuursorgaan: "eli:passed_by",
    rechtsgrondenArtikel: "eli:has_part"
  })
});
