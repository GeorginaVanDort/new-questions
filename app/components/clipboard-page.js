import Ember from 'ember';

export default Ember.Component.extend({
  clipBoard: Ember.inject.service(),
  actions: {
    removeItem(item) {
      this.get('clipBoard').removeItem(item);
    }
  }
});
