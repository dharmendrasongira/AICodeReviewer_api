require('dotenv').config();

const app = require('./src/app.js');

const port = 8000;  // Use const for port

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;
