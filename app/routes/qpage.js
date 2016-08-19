import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('q', params.q_id);
  },
  actions: {
    update(q, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined) {
          q.set(key, params[key]);
        }
      });
      q.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var q = params.q;
      q.get('q').addObject(newAnswer);
      newAnswer.save().then(function(){
        return q.save();
      });
      this.transitionTo('qpage', params.post);
    }
  }
});
