import Route from '@ember/routing/route';
import { products } from '../data/products'

export default class ItemRoute extends Route {
   async model(params) {
       const { item_id } = params;
       const response = await fetch('/api/items.json')
       const {data} = await response.json()
        const product = data.find(( {id} ) => id === item_id);
        console.log(product)
        return product;
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.color = model.colors[0].color;
    }
}
