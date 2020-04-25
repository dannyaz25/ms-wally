const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  rating: { type: Number },
  price: { type: Number },
  img_url: { tpype: Number },
  category: { type: String, enum: ['electro', 'foot', 'sport'] },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
