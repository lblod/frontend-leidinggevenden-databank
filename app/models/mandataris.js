import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'rangorde', 'start', 'einde', 'datumEedaflegging', 'datumMinistrieelBesluit', 'generatedFrom']),

  uri: attr(),
  rangorde: attr('language-string'),
  start: attr('datetime'),
  einde: attr('datetime'),
  datumEedaflegging: attr('datetime'),
  datumMinistrieelBesluit: attr('datetime'),
  generatedFrom: attr('uri-set'),
  bekleedt: belongsTo('mandaat', { inverse: null }),
  heeftLidmaatschap: belongsTo('lidmaatschap', { inverse: null }),
  isBestuurlijkeAliasVan: belongsTo('persoon', { inverse: null }),
  status: belongsTo('mandataris-status-code', { inverse: null }),
  rechtsgrondenAanstelling: hasMany('rechtsgrond-aanstelling', { inverse: null }),
  rechtsgrondenBeeindiging: hasMany('rechtsgrond-beeindiging', { inverse: null }),
  tijdelijkeVervangingen: hasMany('mandatari', { inverse: null }),
  beleidsdomein: hasMany('beleidsdomein-code', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "mandaat:Mandataris",
    rangorde: "mandaat:rangorde",
    start: "mandaat:start",
    einde: "mandaat:einde",
    datumEedaflegging: "ext:datumEedaflegging",
    datumMinistrieelBesluit: "ext:datumMinistrieelBesluit",
    generatedFrom: "ext:generatedFrom",
    bekleedt: "org:holds",
    heeftLidmaatschap: "org:hasMembership",
    isBestuurlijkeAliasVan: "mandaat:isBestuurlijkeAliasVan",
    status: "mandaat:status",
    rechtsgrondenAanstelling: "mandaat:isAangesteldDoor",
    rechtsgrondenBeeindiging: "mandaat:isOntslagenDoor",
    tijdelijkeVervangingen: "mandaat:isTijdelijkVervangenDoor",
    beleidsdomein: "mandaat:beleidsdomein"
  })
});
