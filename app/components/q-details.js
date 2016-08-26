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

    update() {
      this.set("showUpdate", false);
    }
  }
});
