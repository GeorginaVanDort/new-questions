import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        imgURL: this.get('imgURL'),
        category: this.get('category'),
        notes: this.get('notes'),
        votes: 0
      };
      this.sendAction('save', params);
    }
  }
});
