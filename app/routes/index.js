import Route from '@ember/routing/route';
import { products } from '../data/products';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
  @service store;
  async model() {
    // const response = await fetch('/api/items.json');
    // const { data } = await response.json();
    const data = this.store.findAll('product');
    //Model name will come in single quotes
        return data;
      }  
}
