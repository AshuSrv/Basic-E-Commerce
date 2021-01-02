import Component from '@glimmer/component';

export default class ProductComponent extends Component {
    productImage = this.args.product.colors[0].image;//To access props in JS file you have to use args and for hbs file you use @.
}
