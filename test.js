const test = require('brittle')
const addon = require('.')

test('createDouble', (t) => {
  t.is(addon.createDouble(), 3.14)
  t.is(addon.createDouble(), 3.14)
})

test('createInt64', (t) => {
  t.is(addon.createInt64(), 12345)
  t.is(addon.createInt64(), 12345)
})

test('createInt32', (t) => {
  t.is(addon.createInt32(), 12345)
  t.is(addon.createInt32(), 12345)
})

test('hello', (t) => {
  t.is(addon.hello(), 'Hello from C')
})
