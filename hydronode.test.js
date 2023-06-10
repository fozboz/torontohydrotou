const chai = require('chai');
const expect = chai.expect;

const hydronode = require('./hydronode.js');

// There is no timezone specified so these dates are what they are
const exampleSummerOnpeakTime = new Date('2023-06-09T16:30:00') // A Friday in summer at 4:30pm
const exampleSummerMidpeakTime = new Date('2023-06-09T10:30:00') // A Friday in summer at 10:30am
const exampleSummerOffpeakTime = new Date('2023-06-09T20:30:00') // A Friday in summer at 8:30pm
const exampleSummerWeekend = new Date('2023-06-11T12:30:00') // A Sunday in summer at 12:30pm

const exampleWinterOnpeakTime = new Date('2023-12-06T10:30:00') // A Wednesday in winter at 10:30am
const exampleWinterMidpeakTime = new Date('2023-12-06T16:30:00') // A Wednesday in winter at 4:30pm
const exampleWinterOffpeakTime = new Date('2023-12-06T22:30:00') // A Wednesday in winter at 10:30pm
const exampleWinterWeekend = new Date('2023-11-04T10:30:00') // A Saturday in winter at 10:30am

describe('hydronode', () => {
  var result;

  it('should say onpeak if onpeak', () => {
    result = hydronode.rate(exampleSummerOnpeakTime);
    expect(result).to.equal('ONPEAK');

    result = hydronode.rate(exampleWinterOnpeakTime);
    expect(result).to.equal('ONPEAK');
  });

  it('should say midpeak if midpeak', () => {
    result = hydronode.rate(exampleSummerMidpeakTime);
    expect(result).to.equal('MIDPEAK');

    result = hydronode.rate(exampleWinterMidpeakTime);
    expect(result).to.equal('MIDPEAK');
  });

  it('should say offpeak if offpeak', () => {
    result = hydronode.rate(exampleSummerOffpeakTime);
    expect(result).to.equal('OFFPEAK');

    result = hydronode.rate(exampleWinterOffpeakTime);
    expect(result).to.equal('OFFPEAK');

    result = hydronode.rate(exampleSummerWeekend);
    expect(result).to.equal('OFFPEAK');

    result = hydronode.rate(exampleWinterWeekend);
    expect(result).to.equal('OFFPEAK');
  });
});
