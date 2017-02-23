// import $ from 'jquery';
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    let changeElement = (e, contents) => {
      this.set('value', contents);
    };

    let summernote = this.$().summernote({ height: 300 });
    summernote.on('summernote.change', (e, contents) => { changeElement(e, contents); });
  }
});
