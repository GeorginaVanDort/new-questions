import Ember from 'ember';

export default Ember.Component.extend({
  clipBoard: Ember.inject.service(),
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
    },
    addToClipboard(item) {
      this.get('clipBoard').add(item);
    }
  }
});
