import Ember from 'ember';
const { computed } = Ember;
import FakeParseLib from 'npm:fake-parse-lib';
const { parse } = FakeParseLib;

export default Ember.Component.extend({
  text: '',
  parsed: computed('text', function () {
    return parse(this.get('text'));
  })
});
