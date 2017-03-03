import { moduleForModel, test } from 'ember-qunit';

moduleForModel('record', 'Unit | Model | record', {
  // Specify the other units that are required for this test.
  needs: ['model:record']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
