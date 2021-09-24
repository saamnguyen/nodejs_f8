// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_educate_dev');
    console.log('Success');
  } catch (error) {
    console.log('Fail!');
  }
}

module.exports = { connect };
