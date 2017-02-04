import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    inserted_at: { serialize: false },
    updated_at: { serialize: false }
  }
});
