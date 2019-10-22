const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || '1118';

app.get('/api', (req, res) => {
  res.send('Welcome, api is here');
});

app.listen(port, () => console.log(`listening on port ${port}`));
