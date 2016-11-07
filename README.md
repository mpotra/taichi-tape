# taichi-tape
Tape test runner with Promise testing. Used in [taichi](https://github.com/mpotra/taichi)

The library expands on [Tape](https://github.com/substack/tape) with additional support for testing Promises, and several utility methods.

# Installation

```
npm install taichi-tape
```

## Requirements
Node >= v6

# Usage

Usage is the same as [Tape](https://github.com/substack/tape), but with the added methods available.

## Promise methods

The following methods are available with `taichi-tape`.
```javascript
var test = require('taichi-tape')
```

### t.isPromise(obj _[, msg]_)

Assert that `obj` is a Promise with an optional description of the assertion `msg`.

### t.resolves(promise _[, msg [, msg2]]_)

Assert that `promise` resolves, with an optional description of the assertion `msg`.
The optional `msg2` is used as an optional description when the assertion fails due to `promise` not being a Promise.

Aliases: `t.shouldResolve()`

*Returns `promise.then()`*

### t.rejects(promise _[, msg [, msg2]]_)

Assert that `promise` rejects, with an optional description of the assertion `msg`.
The optional `msg2` is used as an optional description when the assertion fails due to `promise` not being a Promise.

Aliases: `t.shouldReject()`

*Returns `promise.catch()`. Please note that the returned promise __resolves__ to the rejection `err` of the original promise.*

### t.resolvesTo(promise, expected _[, msg [, msg2]]_)

Assert that `promise` resolves to `expected`, with an optional description of the assertion `msg`.
The optional `msg2` is used as an optional description when the assertion fails due to `promise` not being a Promise.

The assertion is based on `promise.then((value) => t.looseEqual(value, expected))`. See [t.looseEqual()](https://github.com/substack/tape#tdeeplooseequalactual-expected-msg)

Aliases: `t.shouldResolveTo()`

*Returns `promise.then()`*

### t.rejectsWith(promise, expected _[, msg [, msg2]]_)

Assert that `promise` rejects with `expected`, with an optional description of the assertion `msg`.
The optional `msg2` is used as an optional description when the assertion fails due to `promise` not being a Promise.

The assertion is based on [`t.throws(err, expected)`](https://github.com/substack/tape#tthrowsfn-expected-msg)

Aliases: `t.shouldRejectWith()`

*Returns `promise.catch()`. Please note that the returned promise __resolves__ to the rejection `err` of the original promise.*

## Additional methods

### t.isFunction(fn, _[, msg]_)

Assert that `fn` is a `Function`, with an optional description of the assertion `msg`.

Aliases: `t.isFunc()`

### t.isObject(obj, _[, msg]_)

Assert that `obj` is a **non-null** `Object`, with an optional description of the assertion `msg`.

Aliases: `t.isObj()`

### t.hasLength(obj, expected, _[, msg]_)

Assert that `obj` has the `expected` `length` property value, with an optional description of the assertion `msg`.

The assertion is based on `t.equal(obj['length'], expected, msg)`. See [t.equal()](https://github.com/substack/tape#tequalactual-expected-msg)
