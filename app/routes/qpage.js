import Ember from 'ember';

export default Ember.Route.extend({
  clipBoard: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('q', params.q_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var q = params.q;
      q.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return q.save();
      });
      this.transitionTo('qpage', params.q_id);
    }
  }
});
