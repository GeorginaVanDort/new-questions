import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  name: DS.attr(),
  rating: DS.attr("number"),
  q: DS.belongsTo('q', {async: true})
});
