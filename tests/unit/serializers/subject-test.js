import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subject', 'Unit | Serializer | subject', {
  // Specify the other units that are required for this test.
  needs: ['serializer:subject']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
