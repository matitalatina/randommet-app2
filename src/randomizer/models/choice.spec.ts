import { } from 'mocha';
import { Choice } from './choice';
import { expect } from 'chai';

describe('Choice', () => {
  it('should create an instance of it with properties', () => {
    const choice = new Choice('value', 'label');
    expect(choice.label).to.be.equal('label');
    expect(choice.value).to.be.equal('value');
  });

  it('should return value also in label if not set', () => {
    const choice = new Choice('value');
    expect(choice.label).to.be.equal('value');
    const choice2 = new Choice(3);
    expect(choice2.label).to.be.equal('3');
  });
});