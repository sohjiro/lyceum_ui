import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subject', 'Unit | Model | subject', {
  // Specify the other units that are required for this test.
  needs: ['model:subject']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
