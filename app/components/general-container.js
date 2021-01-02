import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class GeneralContainerComponent extends Component {
    @service shoppingCart;

    // get itemCount() {
    //     return this.shoppingCart.itemList.reduce((total, { count }) => {
    //         return total += count;
    //     },0)
    // }

    get itemCount() {
        return this.shoppingCart.itemList.reduce((total, item) => {
            console.log('Item Count',item.count)
            return total += item.count;
        },0)
    }
}
