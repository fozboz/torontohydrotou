const express = require('express')
const app = express()
const port = 3000

const tous = {
  onpeak: 'ONPEAK',
  midpeak: 'MIDPEAK',
  offpeak: 'OFFPEAK'
}

function rate(now) {
  const month = now.getMonth();
  // const date = now.getDate();
  const day = now.getDay();
  const hour = now.getHours();

  // Evening and weekend offpeak is the same in summer and winter
  if (isWeekend(day) || isEvening(hour)) {
    return tous.offpeak;
  }

  // In summer, the middle tier is onpeak
  if (isSummer(month)) {
    if (isMiddleTier(hour)) {
      return tous.onpeak;
    } else {
      return tous.midpeak
    }
  } else { // Winter
    if (isMiddleTier(hour)) {
      return tous.midpeak;
    } else {
      return tous.onpeak
    }
  }
}

function isMiddleTier(hour) {
  return hour >= 11 && hour < 17;
}

function isSummer(month) {
  // Summer is May to October, months start from 0
  return month >= 4 && month < 9;
}

function isWeekend(day) {
  return day === 6 || day === 0;
}

function isEvening(hour) {
  return hour < 7 || hour >= 19;
}

app.get('/', (req, res) => {
  res.send(rate(new Date()));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = {
  rate
};
