const MoveTree = require("./MoveTree");
const knight_tree = new MoveTree([3, 4], 6);
class KnightSearcher {
  constructor(tree) {
    this.tree = tree;
  }
  bfsFor(targetCoords) {
    let queue = [this.tree.root];
    let path = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
        let depth = node.depth;
        while (node) {
          path.unshift([node.x, node.y]);
          node = node.parent;
        }

        return { path, depth };
      } else {
        queue = queue.concat(node.children);
      }
    }
    return {
            depth: "No depth",
            path: "No path"
        };
  }
  dfsFor(targetCoords) {
    let stack = [this.tree.root];
    let path = [];
    while (stack.length) {
      let node = stack.pop();
      if (node.x === targetCoords[0] && node.y === targetCoords[1]) {
        let depth = node.depth;
        while (node) {
          path.unshift([node.x, node.y]);
          node = node.parent;
        }
        return { path, depth };
      } else {
        stack = stack.concat(node.children);
      }
    }
    return {
            depth: "No depth",
            path: "No path"
        };
    }
}

const searcher = new KnightSearcher(knight_tree);
// let searchResults = searcher.dfsFor([1, 8]);
// let searchResults2 = searcher.bfsFor([4, 8]);
// let searchResults3 = searcher.dfsFor([1, 4]);
// let searchResults4 = searcher.bfsFor([6, 1]);
// let searchResults5 = searcher.dfsFor([1, 7]);
// console.log(
//   `DFS, Depth: ${searchResults.depth}. Path: ${JSON.stringify(searchResults.path)}`
// );
// console.log(
//   `BFS, Depth: ${searchResults2.depth}. Path: ${JSON.stringify(searchResults2.path)}`
// );
// console.log(
//   `DFS, Depth: ${searchResults3.depth}. Path: ${JSON.stringify(searchResults3.path)}`
// );
// console.log(
//   `BFS, Depth: ${searchResults4.depth}. Path: ${JSON.stringify(searchResults4.path)}`
// );
// console.log(
//   `DFS, Depth: ${searchResults5.depth}. Path: ${JSON.stringify(searchResults5.path)}`
// );
let timeBeforeBFS = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.bfsFor([1, 1]);
}
let timeAfterBFS = Date.now();
console.log(`BFS time: ${timeAfterBFS - timeBeforeBFS}ms`);

let timeBefore = Date.now();
for (let i = 0; i < 1000; i++) {
  searcher.dfsFor([1, 1]);
}
let timeAfter = Date.now();
console.log(`DFS time: ${timeAfter - timeBefore}ms`);




module.exports = KnightSearcher;
