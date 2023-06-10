const express = require('express')
const app = express()
const port = 3000

const tous = {
  onpeak: 'ONPEAK',
  midpeak: 'MIDPEAK',
  offpeak: 'OFFPEAK'
}

// TODO: Winter!

app.get('/', (req, res) => {
  res.send(rate(new Date()));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

function rate(now) {
  const day = now.getDay();
  const hour = now.getHours();

  // Weekend offpeak
  if (day === 6 || day === 0) {
    return tous.offpeak;
  } else { // Weekdays
    // Evening offpeak is 7pm to 7am
    if (hour < 7 || hour >= 19) {
      return tous.offpeak;
    }
    // Midpeak is 7-11am, 5-7pm
    if ((hour >= 7 && hour < 11) || (hour >= 17 && hour < 19)) {
      return tous.midpeak;
    } else { // Must be onpeak
      return tous.onpeak;
    }
  }
}

module.exports = {
  rate
};
