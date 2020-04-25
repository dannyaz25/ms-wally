const Item = require('../models/item');

class ItemService {

    async getItems(req,res) {
      return await Item.find({}); 
    }
    create(req,res) {
        const item = new Item({ name: 'eldevsin.site',rating:'434', price:3,img_url:'fff',category:'electro'});
        item.save();
        return item; 
    }
}

module.exports = new ItemService();