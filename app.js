const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || '1118';

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
});

// now creating app to protect
app.post('/api/posts', (req, res) => {
  res.json({
    message: 'Post Created ....'
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
