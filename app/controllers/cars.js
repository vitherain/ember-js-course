import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteCar: function(id) {
      let self = this;

      this.store.findRecord('car', id).then(function(car) {
        car.destroyRecord();
        self.transitionToRoute('cars');
      });
    }
  }
});
