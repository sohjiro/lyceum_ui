import { moduleForModel, test } from 'ember-qunit';

moduleForModel('status', 'Unit | Model | status', {
  // Specify the other units that are required for this test.
  needs: ['model:status']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
