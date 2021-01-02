
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
      console.log(item,"Itemmmmmmm")
      const count = event.target.value;
    //   console.log(item.count,'----')
    if (count >= 0) {
        item.count = parseInt(count);
        // console.log(item.count,' -----if (count >= 0)-----')
    } else {
        item.count = 0;
        // console.log(item.count,' -----else-----')
    }
  }
}