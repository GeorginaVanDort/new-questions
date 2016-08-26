import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
    console.log(item);
  },
  removeItem(item) {
  var itemsDupe = this.get('items').slice();
  var indexToRemove = itemsDupe.indexOf(item);
  itemsDupe.splice(indexToRemove, 1);
  this.set('items', itemsDupe);
  },
});
