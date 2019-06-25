'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend-leidinggevenden-databank',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    fastboot: {
      hostWhitelist: [ "leidinggevenden.lblod.info",
                       "dev.leidinggevenden.lblod.info",
                       /^localhost:\d+$/,
                       /^.*$/
                     ] // 'example.com', 'subdomain.example.com' // TODO: these regexpses with actual allowed domains, this is a major flaw.
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'vo-webuniversum': {
      version: '2.8.3', //TODO copied from mandaten
      header: '//widgets.vlaanderen.be/widget/live/8cb0e2dd9fb843a88da86211c9ade78c',
      footer: '//widgets.vlaanderen.be/widget/live/278abfe4c19f49daa667c00815f6ab12'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
