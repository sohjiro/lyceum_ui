import { moduleForModel, test } from 'ember-qunit';

moduleForModel('candidate', 'Unit | Model | candidate', {
  // Specify the other units that are required for this test.
  needs: ['model:candidate']
});

test('it exists', function(assert) {
  let model = this.store();
  assert.ok(!!model);
});
