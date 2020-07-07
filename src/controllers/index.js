
const collatzService = require('../services/Collatz');

class IndexController {
  static async getItems(req, res) {
    const result = await collatzService.getItems(req, res);
    console.log(result);
    return res.status(200).send(result);
  }

  static async create(req, res) {
    const result = await collatzService.create(req, res);
    console.log(result);
    return res.status(200).send(result);
  }

  static async generateDepth(req, res) {
    const result = await collatzService.generateDepth(req, res);
    console.log(result);
    return res.status(200).send(result);
  }
}


module.exports = IndexController;
