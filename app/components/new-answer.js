import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    answerFormShow() {
      this.set('newAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('name'),
        text: this.get('text')
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('name', "");
      this.set('text', "");
    }
  }
});
