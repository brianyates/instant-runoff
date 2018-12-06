const express = require('express');
const bodyParser = require('body-parser')
const keys = require('./src/config/keys');
const mongoose = require('mongoose');
require('./models/Poll');
require('./models/Voter');
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./routes/index')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build','index.html'))
  })
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
});