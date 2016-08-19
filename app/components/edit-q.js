import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(q) {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('update', q, params);
    }
  }
});
