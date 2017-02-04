// import DS from 'ember-data'

import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service()
});

/*
export default DS.RESTAdapter.extend({
  host: "cars.json?jsonp=?",
  shouldReloadAll() {
    return true;
  }
});
*/
