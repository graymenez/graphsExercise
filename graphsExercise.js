class GraphNode {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.node = new Set();
  }
  addVertex(node) {
    this.node.add(node);
  }
  addVertices(node) {
    for (let n in node) {
      this.addVertex(n);
    }
  }
  addEdge(node1, node2) {
    node1.adjacent.add(node2);
    return;
  }
  removeEdge(node1, node2) {
    node1.adjacent.remove(node2);
  }

  //************************ Needs Review ******************************************

  depthFirstSearch(val) {
    let currentNode = this.node;
  }
  breadthFirstSearch(val) {}

  //************************ Needs Review ******************************************
}

let a = new GraphNode("Jimmy");
let b = new GraphNode("Bobby");
let c = new GraphNode("Corey");
let d = new GraphNode("Darren");
graph.addVertices([a, b, c, d]);
graph.addEdge(a, b);
graph.addEdge(a, c);
graph.addEdge(b, d);
graph.addEdge(c, d);
