import Route from '@ember/routing/route';
import { products } from '../data/products'
import { inject as service } from '@ember/service';
export default class ItemRoute extends Route {
    @service store;
   async model(params) {
       const { item_id } = params;
    //    const response = await fetch('/api/items.json')
    //    const {data} = await response.json()
       const data = await this.store.findAll('product');
       //Model name will come in single quotes
        const product = data.find(( {id} ) => id === item_id);
        console.log(product)
        return product;
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.color = model.colors[0].color;
    }
}
