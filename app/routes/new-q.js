import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newQ = this.store.createRecord('q', params);
      newQ.save();
      this.transitionTo('index');
    }
  }
});
