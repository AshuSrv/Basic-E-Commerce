import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
    // @atte id;
    // we removed this since it's giving some error
    @attr name;
    @attr description;
    @attr price;
    @attr features;
    @attr colors;
}
