import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/items.json');
    const { data } = await response.json();
        return data;
      }  
}
