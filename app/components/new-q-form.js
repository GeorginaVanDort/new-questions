import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
    }
  }
});
