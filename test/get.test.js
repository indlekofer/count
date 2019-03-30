import assert from 'assert';

import { get, next, reset, restore } from '../src/index';

describe('get', () => {
  beforeEach(() => {
    reset();
  }); 
  it('get and next should increase count', () => {
    assert.equal(get(), 0);
    next();
    assert.equal(get(), 1);
    next();
    assert.equal(get(), 2);
  });
  it('get and next after restore should increase named count', () => {
    assert.equal(get(), 0);
    assert.equal(next(), 1);
    assert.equal(get('test'), 0);
    assert.equal(next('test'), 1);
    assert.equal(get(), 1);
    assert.equal(next(), 2);
    assert.equal(get('test'), 1);
    assert.equal(next('test'), 2);
    assert.equal(get('test'), 2);
    restore('test');
    assert.equal(get('test'), 0);
    assert.equal(next('test'), 1);
    assert.equal(get(), 2);
  });
});
