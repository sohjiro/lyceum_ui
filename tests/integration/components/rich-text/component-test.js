import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rich-text', 'Integration | Component | rich text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rich-text}}`);

  assert.notEqual(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rich-text}}
      template block text
    {{/rich-text}}
  `);

  assert.notEqual(this.$().text().trim(), '');
});
