const express = require('express');

const app = express();
const port = process.env.PORT || '1118';

app.get('/', (req, res) => {
  res.send('api is here');
});

app.listen(port, () => console.log(`listening on port ${port}`));
