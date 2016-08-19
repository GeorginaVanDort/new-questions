import Ember from 'ember';

export default Ember.Component.extend({
  showUpdate: false,
  actions:{
    showUpdate() {
      this.set("showUpdate", true);
    },

    hideUpdate() {
      this.set("showUpdate", false);
    },

    update(q, params) {
      this.set("showUpdate", false);
      this.sendAction('update', q, params);
    }
  }
});
