import { RandomFromList } from './list';
import { } from 'jasmine';
import { expect } from 'chai';

describe('RandomFromList', () => {
  it('should pick randomly from list', () => {
    const list = [
      'a',
      'b',
      'c',
    ];

    expect(RandomFromList.choose(list)).to.be.a('string');
  })
});