import Ember from 'ember';

export default Ember.Component.extend({

  numberOfAnswers:
  Ember.computed('q.answers', function() {
    return this.get('q.answers.length');
    })
});
