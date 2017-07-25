import { expect } from 'chai';
import { romanCalculator } from '../index.js';

describe("Roman Numeral Calculator", () => {
  it("should return II when given I plus I", () => {
    expect(romanCalculator("I", "I")).to.equal("II");
  });
  it('should return V when given II plus III', () => {
    expect(romanCalculator("II", "III")).to.equal("V");
  });
  it('should return VI when given I plus V', () => {
    expect(romanCalculator('I', 'V')).to.equal('VI');
  });
  it('should return VI when given V plus I', () => {
    expect(romanCalculator('V', 'I')).to.equal('VI');
  });
  it('should return X when given V plus V', () => {
    expect(romanCalculator('V', 'V')).to.equal('X');
  });
  it('should return XII when given IX plus III', ()  => {
    expect(romanCalculator('IX', 'III')).to.equal('XII');
  })
  it('should return XVIII when given X plus VIII', () => {
    expect(romanCalculator('X', 'VIII')).to.equal('XVIII');
  });
  it('should return XXXIX when given XXXIV plus V', () => {
    expect(romanCalculator('XXXIV', 'V')).to.equal('XXXIX');
  });
});
