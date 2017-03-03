import { moduleForModel, test } from 'ember-qunit';

moduleForModel('type', 'Unit | Model | type', {
  // Specify the other units that are required for this test.
  needs: ['model:type']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
