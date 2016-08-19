import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  name: DS.attr(),
  q: DS.belongsTo('q', {async: true})
});
