import assert from 'assert';

import { set, get, reset } from '../src/index';

describe('set', () => {
  beforeEach(() => {
    reset();
  }); 
  it('set should increase count', () => {
    set(1);
    assert.equal(get(), 1);
    set(2);
    assert.equal(get(), 2);
  });
  it('named set increase named count', () => {
    set(100);
    set(5, 'test');
    assert.equal(get(), 100);
    assert.equal(get('test'), 5);
  });
});
