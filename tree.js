/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(root = this.root) {
    // let's do DFS
    if (!root) return 0;

    let sum = root.val;

    for (let child of root.children) {
      sum += this.sumValues(child);
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(root = this.root) {
    // let's do DFS
    if (!root) return 0;

    let count = root.val % 2 === 0 ? 1 : 0;

    for (let child of root.children) {
      count += this.countEvens(child);
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };