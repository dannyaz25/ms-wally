const mongoose = require('mongoose');

const collatzSchema = new mongoose.Schema({
  id: { type: Number },
  element: { type: Number },
  depth: { type: Number },
  arrayList: { type: Array },
});

const Collatz = mongoose.model('Collatz', collatzSchema);

module.exports = Collatz;
