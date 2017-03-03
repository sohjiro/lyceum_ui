import { moduleForModel, test } from 'ember-qunit';

moduleForModel('campus', 'Unit | Model | campus', {
  // Specify the other units that are required for this test.
  needs: ['model:campus']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
