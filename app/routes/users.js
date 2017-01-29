import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let url = 'https://api.github.com/users';
    return Ember.$.getJSON(url).then(function(data) {
      return data.splice(0, 10);
    });
  }
});
