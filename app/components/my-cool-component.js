import Ember from 'ember';

export default Ember.Component.extend({
  name: 'Brad',
  greetingSet: false,
  actions: {
    greetUser: function(name) {
      alert('Hello' + name);
      this.setProperties({
        greetingSet: true
      });
    }
  },
  classNames: ['well'],
  classNameBindings: ['greetingSet']
});
