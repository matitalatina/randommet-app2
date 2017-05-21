import { } from 'mocha';
import { RandomFromList } from './list';
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