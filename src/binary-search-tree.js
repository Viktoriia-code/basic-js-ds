const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.root = null;
  }

  add(data) {
    this.root = addNewNode(this.root, data);

    function addNewNode(node, data) {
      if (!node) { return new Node(data) }
      else if (node.data === data) { return node }
      else if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.root, data);

    function search(node, data) {
      if (!node) { return false }
      else if (node.data === data) { return true }
      return data < node.data ?
        search(node.left, data):
        search(node.right, data)
    }
  }

  find(data) {
    return findNode(this.root, data);
    function findNode(node, data) {
      if (!node) {
        return null; // Node with the given data not found
      }
      else if (node.data === data) {
        return node; // Node with the given data found
      }
      else if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {}

  min() {
  }

  max() {
  }
}

module.exports = {
  BinarySearchTree
};