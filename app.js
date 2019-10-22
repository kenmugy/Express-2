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
app.post('/api/posts', verifyToken, async (req, res) => {
  try {
    const authData = await jwt.verify(req.token, 'hexagon');
    res.json({
      message: 'Post Created ....',
      authData
    });
  } catch (error) {
    res.send(error);
  }
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

function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // split at space
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // set token
    req.token = bearerToken;
    next();
  } else {
    //   forbidden
    res.sendStatus(403);
  }
}

app.listen(port, () => console.log(`listening on port ${port}`));
