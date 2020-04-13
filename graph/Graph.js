class Graph {
  constructor(v) {
    this.v = v; //顶点个数
    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(s, t) {
    this.adj[s].push(t);
    this.adj[t].push(s);
  }

  // 广度优先搜索
  bfs(s, t) {
    if (s === t) return;
    const v = this.v;
    const adj = this.adj;
    const visited = Array(v).fill(false);
    visited[s] = true;
    const queue = [];
    queue.push(s);
    const prev = Array(v).fill(-1);
    while (queue.length !== 0) {
      const w = queue.shift();
      for (let i = 0, len = adj[w].length; i < len; i++) {
        const q = adj[w][i];
        if (!visited[q]) {
          prev[q] = w;
          if (q === t) {
            this.print(prev, s, t);
            return;
          }
          visited[q] = true;
          queue.push(q);
        }
      }
    }
  }

  print(prev, s, t) {
    if (prev[t] !== -1 && t !== s) {
      this.print(prev, s, prev[t]);
    }
    console.log(t);
  }
}

//测试用例
const Graph1 = new Graph(8);
Graph1.addEdge(0, 1);
Graph1.addEdge(0, 3);
Graph1.addEdge(1, 2);
Graph1.addEdge(1, 4);
Graph1.addEdge(2, 5);
Graph1.addEdge(3, 4);
Graph1.addEdge(4, 5);
Graph1.addEdge(4, 6);
Graph1.addEdge(5, 7);
Graph1.addEdge(6, 7);
console.log(Graph1.adj[0]); //[1, 3]
console.log(Graph1.adj[7]); //[5,6]
console.log(Graph1.adj[4]); //[1,3,5,6]
console.log(Graph1.adj[2]); //[1,5]
console.log(Graph1.adj[1]); //[0,2,4]
Graph1.bfs(0, 6);
console.log("---------------------");
Graph1.bfs(1, 6);
console.log("---------------------");
Graph1.bfs(2, 0);
