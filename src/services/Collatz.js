const Collatz = require('../models/Collatz');
const { CollatzTree } = require('./CollatzTree');

class CollatzService {
  static async getItems(req, res) {
    console.log('req %s and res %s', req, res);
    return Collatz.find({});
  }

  static async getElementCollatzTree(element) {
    const colllatzTree = await Collatz.findOne({ element });
    if (colllatzTree) {
      return colllatzTree;
    }
    return Collatz.findOne({ arrayList: element });
  }

  static async create(req, res) {
    console.log('req %s and res %s', req, res);
    const { element } = req.body;
    const collatzTree = await this.getElementCollatzTree(element.toString());
    if (collatzTree) return { message: 'el elemento ya fue procesado', collatzTree };
    const tree = new CollatzTree();
    const collatz = new Collatz(tree.process(element));
    collatz.save();
    return { message: 'el elemento ya fue procesado', collatzTree: tree.printArray() };
  }

  static async generateDepth(req, res) {
    console.log('req %s and res %s', req, res);
    const { depth } = req.body;
    const collatzTree = new CollatzTree();
    const tree = collatzTree.create(depth);
    return collatzTree.printTree(tree);
  }
}

module.exports = CollatzService;
