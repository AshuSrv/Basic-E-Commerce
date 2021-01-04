import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | shopping-cart', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.ok(service);
  });

  test('item list Test', function(assert) {
    let service = this.owner.lookup('service:shopping-cart');
    assert.equal(service.itemList.length, 0, "Item list is Empty");
    service.addItem({});
    assert.equal(service.itemList.length, 1, 'Item list increased by 1');
  });
});
