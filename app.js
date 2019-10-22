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

app.post('/api/login', async (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: 'jane',
    email: 'jane@email.com'
  };

  try {
    const token = await jwt.sign({ user }, 'hexagon');
    res.json({ token });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
