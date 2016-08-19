import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-q');
  this.route('qpage', {path: '/qpage/:q_id'});
});

export default Router;
