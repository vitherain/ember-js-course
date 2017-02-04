import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editCar: function(id) {
      let self = this;
      let make = this.get('model.make');
      let model = this.get('model.model');
      let year = this.get('model.year');

      this.store.findRecord('car', id).then(function(car) {
        car.set('make', make);
        car.set('model', model);
        car.set('year', year);
        car.save();
        self.transitionToRoute('cars');
      });
    }
  }
});
