const test = require('brittle')
const addon = require('.')

test('hello', (t) => {
  t.is(addon.hello(), 'Hello addon')
})
