class Move {
  constructor(x, y, depth, children, parent, matrix) {
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.children = children;
    this.parent = parent;
    this.matrix = matrix;
  }
}

module.exports = Move;