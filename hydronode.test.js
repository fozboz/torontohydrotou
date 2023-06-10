const chai = require('chai');
const expect = chai.expect;

const hydronode = require('./hydronode.js');

// Times are UTC
const exampleSummerOnpeakTime = new Date('2023-06-09T16:30:00') // Friday at 4:30pm
const exampleSummerMidpeakTime = new Date('2023-06-09T10:30:00') // Friday at 10:30am
const exampleSummerOffpeakTime = new Date('2023-06-09T00:30:00') // Friday at 8:30pm

describe('hydronode', () => {
  it('should say onpeak if onpeak', () => {
    const result = hydronode.rate(exampleOnpeakTime);
    expect(result).to.equal('ONPEAK');
  });

  it('should say midpeak if midpeak', () => {
    const result = hydronode.rate(exampleMidpeakTime);
    expect(result).to.equal('MIDPEAK');
  });

  it('should say offpeak if offpeak', () => {
    const result = hydronode.rate(exampleOffpeakTime);
    expect(result).to.equal('OFFPEAK');
  });
});
