import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(q) {
      q.save();
      this.sendAction("update");
      }
    }
  });
