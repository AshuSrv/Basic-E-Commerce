import EmberRouter from '@ember/routing/router';
import config from 'demo-1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('cart', {path:'shopping-cart'}, function() {});
  this.route('not-found',{path:'/*path'});
  this.route('item',{path:'/item/:item_id'});
});
