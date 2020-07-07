const BinarySearchTree = require('print-bst');
const { Node } = require('./Node');


class CollatzTree {
  constructor() {
    this.arrayList = [];
  }

  create(depth) {
    return this.insert(1, 1, depth);
  }

  insert(start, curLength, maxLength) {
    const root = new Node(start, null, null);
    if (curLength < maxLength) {
      root.right = this.insert(start * 2, curLength + 1, maxLength);
      if (start % 6 === 4 && start > 4) {
        root.left = this.insert((start - 1) / 3, curLength + 1, maxLength);
      }
    }
    return root;
  }

  printArray() {
    let cadena = '';
    const temp = this.arrayList;
    for (const a of temp) {
      if (a === 1) {
        cadena += a;
      } else {
        cadena += `${a} -> `;
      }
    }
    return cadena;
  }

  printTree(tree) {
    const bst = new BinarySearchTree();
    bst.root = tree;
    return bst.print();
  }

  step(n) {
    const temp = n;
    if (temp % 2 === 0) return temp / 2;
    return 3 * temp + 1;
  }

  process(n) {
    const tempArray = [];
    let depth = 0;
    let temp = n;
    const originalNumber = n;
    while (n >= 1) {
      tempArray.push(n.toString());
      temp = temp !== 1 ? this.step(temp) : 0;
      depth += 1;
    }
    this.arrayList = tempArray;
    return { depth, element: originalNumber, arrayList: this.arrayList };
  }
}

module.exports = { CollatzTree };
