import assert from 'assert';

import { get, next, reset, restore } from '../src/index';

describe('restore', () => {
  beforeEach(() => {
    reset();
  }); 
  it('series of get next should be restored', () => {
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
    restore();
    assert.equal(get(), 0);
  });
});
