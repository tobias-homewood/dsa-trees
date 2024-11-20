/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // let's do BFS
    if (!this.root) return 0;
    let depth = 1;
    let queue = [];

    // if a child exists, add it to the queue
    if (this.root.left) queue.push(this.root.left);
    if (this.root.right) queue.push(this.root.right);

    // check every possible level of the tree as long as there are nodes to check
    while (queue.length > 0) {
      depth++;
      let nextLevel = [];
      for (let node of queue) {
        if (!node.left && !node.right) { // leaf node
          return depth;
        }
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
      queue = nextLevel;
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root, depth = 1) {
    // let's do DFS
    if (!root) return 0;

    if (!root.left && !root.right) return depth;

    let leftDepth = this.maxDepth(root.left, depth + 1);
    let rightDepth = this.maxDepth(root.right, depth + 1);

    return Math.max(depth, leftDepth, rightDepth);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // let's keep track of the max sum found so far
    let maxSum = 0;

    function maxPath(node) {
      // let's do DFS
      if (!node) return 0;
  
      // if it's a leaf, the sum is just its value
      if (!node.left && !node.right) return node.val;
  
      // if it's not a leaf, we need to check the sum of the left and right paths
      let leftPath = maxPath(node.left);
      let rightPath = maxPath(node.right);

      // update maxSum if we find a new maximum by taking this path
      maxSum = Math.max(maxSum, leftPath + node.val + rightPath);
  
      return Math.max(leftPath, rightPath) + node.val;
    }

    maxPath(this.root);

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
