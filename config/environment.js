/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://api.github.com"
    },
    firebase: {
      apiKey: "AIzaSyCs5EEgCl2Lr4adflpeVEXve78DK0qv_OI",
      authDomain: "mycars-52d50.firebaseapp.com",
      databaseURL: "https://mycars-52d50.firebaseio.com",
      storageBucket: "mycars-52d50.appspot.com",
      messagingSenderId: "502659351841"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
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
  }

  if (environment === 'production') {

  }

  return ENV;
};
