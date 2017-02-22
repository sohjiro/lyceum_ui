import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$().summernote({
      height: 300
    });
  }
});
