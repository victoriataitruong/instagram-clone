const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require('./keys');

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', (err) => {
  console.log('error connecting to mongo', err);
});

require('./models/user');
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
