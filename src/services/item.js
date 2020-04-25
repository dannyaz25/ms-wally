const Item = require('../models/item');

class ItemService {
  static async getItems(req, res) {
    console.log('req %s and res %s', req, res);
    return Item.find({});
  }

  static create(req, res) {
    console.log('req %s and res %s', req, res);
    const item = new Item({
      name: 'eldevsin.site', rating: '434', price: 3, img_url: 'fff', category: 'electro',
    });
    item.save();
    return item;
  }
}

module.exports = ItemService;
