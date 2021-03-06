import EmberRouter from '@ember/routing/router';
import config from 'tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: 'item/:item_id' });
  this.route("cart", { path: "shoping-cart" });
  this.route('not-found', {path: '/*'});
});
