const express = require ('express');
const path = require('path');

const PORT = process.env.PORT || 3772;
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Bowling scorecard listening to PORT ${PORT}`);
})


