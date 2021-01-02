import Route from '@ember/routing/route';
import {products} from '../data/products'
export default class ItemRoute extends Route {
    model(params) {
        const { item_id } = params;
        const product = products.find(( {id} ) => id === item_id);
        console.log(product)
        return product;
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.color = model.colors[0].color;
    }
}