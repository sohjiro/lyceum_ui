import { moduleForModel, test } from 'ember-qunit';

moduleForModel('mail', 'Unit | Model | mail', {
  // Specify the other units that are required for this test.
  needs: ['model:mail']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
