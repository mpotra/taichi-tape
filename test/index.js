const test = require('../taichi-tape');

test('Integration test', function (t) {
  const o1 = null;
  const o2 = {};
  
  const n1 = 4;
  const n2 = 6;
  
  const s1 = 's1';
  const s2 = '';
  
  const e3 = new TypeError('smth');
  
  const a1 = [];
  const a2 = [1];
  const a3 = [1,2];
  
  const f1 = () => {};
  const f2 = (a) => {};
  f2.then = 1;
  const f3 = (a,b) => {};
  f3.then = () => {};
  
  const p1 = Promise.resolve(n1);
  const p2 = Promise.reject(n2);

  const p3 = Promise.reject(e3);

  const r1 = t.isFunction(f1, 'f1 should be a function');
  const r2 = t.isObject(o2, 'o2 should be a non-null object');

  const r3 = t.isPromise(f3, 'f3 should be a promise');
  const r4 = t.isPromise(p1, 'p1 should be a promise');
  const r5 = t.isPromise(p2, 'p2 should be a promise');
  const r6 = t.isPromise(p3, 'p3 should be a promise');
  
  const r7 = t.resolves(p1, 'p1 should resolve');
  const r8 = t.resolvesTo(p1, n1, 'p1 should resolve to n1');
  
  const r9 = t.shouldReject(p2, 'p2 should reject');
  const r10 = t.shouldRejectWith(p2, n2, 'p2 should reject with n2');
  
  const r11 = t.shouldReject(p3, 'p3 should reject');
  const r12 = t.shouldRejectWith(p3, e3, 'p3 should reject with e3');
  const r13 = t.shouldRejectWith(p3, TypeError, 'p3 should reject with TypeError');
  
  process.nextTick(() => {
    t.resolvesTo(r7, n1, 'r7 resolves to n1');
    t.resolvesTo(r8, n1, 'r8 resolves to n1');
    t.resolvesTo(r9, n2, 'r9 resolves to n2');
    t.resolvesTo(r10, n2, 'r10 resolves to n2');
    t.resolvesTo(r11, e3, 'r11 resolves to e3');
    t.resolvesTo(r12, e3, 'r12 resolves to e3');
    t.resolvesTo(r13, e3, 'r13 resolves to e3');
  });
  
  t.hasLength(f1, 0, 'f1 has 0 args');
  t.hasLength(f2, 1, 'f2 has 1 args');
  t.hasLength(f3, 2, 'f3 has 2 args');
  t.hasLength(a1, 0, 'a1 has 0 items');
  t.hasLength(a2, 1, 'a2 has 1 items');
  t.hasLength(a3, 2, 'a3 has 2 items');
  
  t.end();
});
