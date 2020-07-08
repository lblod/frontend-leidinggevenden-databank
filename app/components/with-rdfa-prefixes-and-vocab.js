import Component from '@ember/component';

export default class WithRdfaPrefixesAndVocab extends Component {
  tagName = 'div';
  attributeBindings = ["vocab", "prefixes"];
  get vocab() {
    const vocab=""; // generated
    return vocab != "" && vocab;
  }
  get prefixes() {
    const prefixes = "lblodlg:http://data.lblod.info/vocabularies/leidinggevenden/ email:http://mu.semte.ch/vocabularies/ext/email/ nmo:http://www.semanticdesktop.org/ontologies/2007/03/22/nmo# toezichtReport:http://mu.semte.ch/vocabularies/ext/supervision/reporting/ toezicht:http://mu.semte.ch/vocabularies/ext/supervision/ validation:http://mu.semte.ch/vocabularies/validation/ bbcdr:http://mu.semte.ch/vocabularies/ext/bbcdr/ export:http://mu.semte.ch/vocabularies/ext/export/ dbpedia:http://dbpedia.org/ontology/ schema:http://schema.org/ nie:http://www.semanticdesktop.org/ontologies/2007/01/19/nie# nfo:http://www.semanticdesktop.org/ontologies/2007/03/22/nfo# pav:http://purl.org/pav/ nao:http://www.semanticdesktop.org/ontologies/2007/08/15/nao# foaf:http://xmlns.com/foaf/0.1/ skos:http://www.w3.org/2004/02/skos/core# regorg:https://www.w3.org/ns/regorg# prov:http://www.w3.org/ns/prov# org:http://www.w3.org/ns/org# person:http://www.w3.org/ns/person# adms:http://www.w3.org/ns/adms# dul:http://www.ontologydesignpatterns.org/ont/dul/DUL.owl# cpsv:http://purl.org/vocab/cpsv# dct:http://purl.org/dc/terms/ m8g:http://data.europa.eu/m8g/ eli:http://data.europa.eu/eli/ontology# generiek:http://data.vlaanderen.be/ns/generiek# persoon:http://data.vlaanderen.be/ns/persoon# mandaat:http://data.vlaanderen.be/ns/mandaat# besluit:http://data.vlaanderen.be/ns/besluit# tmp:http://mu.semte.ch/vocabularies/tmp/ ext:http://mu.semte.ch/vocabularies/ext/ rm:http://mu.semte.ch/vocabularies/logical-delete/ typedLiterals:http://mu.semte.ch/vocabularies/typed-literals/ mu:http://mu.semte.ch/vocabularies/core/ xsd:http://www.w3.org/2001/XMLSchema# app:http://mu.semte.ch/app/ owl:http://www.w3.org/2002/07/owl# rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns#"; // generated
    return prefixes != "" && prefixes;
  }
}
