
const itemService = require('../services/item');
class IndexController {
    async getItems(req,res){
    
      const result = await itemService.getItems(req,res);
      console.log(result);
      return res.status(200).send(result);
    }
    async create(req,res){
    
        const result = await itemService.create(req,res);
        console.log(result);
        return res.status(200).send(result);
      }
}
  
    

  module.exports = new IndexController();
    
      