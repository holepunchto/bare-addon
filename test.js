const test = require('brittle')
const addon = require('.')

test('createDouble', (t) => {
  t.is(addon.createDouble(), 3.14)
  t.is(addon.createDouble(), 3.14)
})

test('hello', (t) => {
  t.is(addon.hello(), 'Hello from C')
})
