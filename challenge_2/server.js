const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(cors());

app.get('/prices/:startDate/:endDate/:currency', (req, res) => {
  const { startDate, endDate, currency } = req.params;
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Bitcoin tracker listening to PORT ${PORT}`);
})