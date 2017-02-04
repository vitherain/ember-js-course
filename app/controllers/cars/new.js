import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCar: function() {
      let self = this;
      let rand = Math.floor((Math.random() * 10000 + 1));
      let newCar = this.store.createRecord('car', {
        id: rand,
        make: this.get('carMake'),
        model: this.get('carModel'),
        year: this.get('carYear'),
      });

      newCar.save();
      self.transitionToRoute('cars');
    }
  }
});
