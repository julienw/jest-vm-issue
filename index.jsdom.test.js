/**
 * @jest-environment jsdom
 */
describe('jsdom environment', function () {
  it('test', function () {
    const vm = require('vm');

    const script = `require('./index')`;

    const thisGlobal = {
      foo: 'foo',
      require,
    };

    vm.runInNewContext(script, thisGlobal);
  });
});
