const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    return console.error('Error:', err); // eslint-disable-line no-console
  }

  return console.log('Server started at:', port); // eslint-disable-line no-console
});
