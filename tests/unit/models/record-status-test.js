import { moduleForModel, test } from 'ember-qunit';

moduleForModel('record-status', 'Unit | Model | record status', {
  // Specify the other units that are required for this test.
  needs: ['model:record-status']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
