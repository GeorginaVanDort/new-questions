import Ember from 'ember';

export function categoryColor(params) {
  var category = params[0].get("category");

  if (category >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-certificate"></span>');
  }
  else if (category >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ice-lolly-tasted"></span>');
  }
  else if (category >= 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-search"></span>');
  }
}

export default Ember.Helper.helper(categoryColor);
