//node js config file
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const router = require('./routes/auth.routes');

const app = express()
const PORT = config.get('port') || 5000;

app.use('/api/auth', router);

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`app is started on port ${PORT}`));
  } catch(e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
