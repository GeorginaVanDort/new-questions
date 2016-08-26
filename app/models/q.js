import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  imgURL: DS.attr(),
  category: DS.attr("number"),
  notes: DS.attr(),
  votes: DS.attr("number"),
  answers: DS.hasMany('answer', {async: true})
});
