// Write a function readProblem(fileName) that reads a file with the following format:
// 1. The first line contains two integers, n and m, separated by a space. 
// n is the number of nodes in the graph, and m is the number of edges.
// 2. The next m lines each contain two integers, separated by a space, representing an edge in the graph.
// The nodes are numbered from 0 to n-1.
// The function should return an object representing the graph, where the keys are the nodes and the values are arrays of the nodes that the key node has an edge to.
import fs from 'fs';

function readProblem(fileName) {
    let text = fs.readFileSync(fileName, 'utf8');
    let lines = text.split('\n');
    let [n, m] = lines[0].split(' ').map(x => parseInt(x));
    let graph = Object.create(null);
    
    for(let i=0; i<n; i++) {
        graph[i] = [];
    }
    for (let i = 1; i <= m; i++) {
        let [node1, node2] = lines[i].split(' ').map(x => parseInt(x));
        if (graph[node1] === undefined) {
            graph[node1] = [];
        }
        if (graph[node2] === undefined) {
            graph[node2] = [];
        }
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    return graph;
}

console.log(readProblem(process.argv[2] || 'input.txt'));

const Infinity = Number.POSITIVE_INFINITY;

// The distance of a node to a subset R is the minimum 
// number of edges that need to be traversed to get from the node to some node in R.
// this function computes the matrix of distances in the graph G
function distanceMatrix(G) {
    let n = Object.keys(G).length;
    let D = [];
    for (let i = 0; i < n; i++) {
        D[i] = [];
        for (let j = 0; j < n; j++) {
            D[i][j] = Infinity;
        }
    }
    for (let i = 0; i < n; i++) {
        D[i][i] = 0;
        for (let j = 0; j < G[i].length; j++) {
            D[i][G[i][j]] = 1;
        }
    }
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            if (D[i][k] < Infinity) {

                for (let j = 0; j < n; j++) {
                    if (D[k][j] < Infinity) {

                        if (D[i][j] > D[i][k] + D[k][j]) {
                            D[i][j] = D[i][k] + D[k][j];
                        }   
                    }
                }
            }
        }
    }
    return D;
}
          
// function distance(node, R) computes the distance of node to the subset R
function distance(node, R) {
    let n = R.length;
    let min = Infinity;
    for (let i = 0; i < n; i++) {
        if (D[node][R[i]] < min) {
            min = D[node][R[i]];
        }
    }
    return min;
}

console.log(distanceMatrix(readProblem(process.argv[2] || 'input.txt')));
/* 
Write a JavaScript function solution(G) that gives the solution to this problem: 
"Given a undirected graph G = (V,E), find the smallest subset R of V such that the distance 
of any node to the subset R is not greater than one"
*/
function solution(G) {
    let R = [];
    let visited = [];
    let queue = [];
    let node = 0;
    queue.push(node);
    visited[node] = true;
    while (queue.length > 0) {
        node = queue.shift();
        let d = distance(node, R);
        if (d > 1) {
            R.push(node);
        }
        for (let i = 0; i < G[node].length; i++) {
            if (!visited[G[node][i]]) {
                queue.push(G[node][i]);
                visited[G[node][i]] = true;
            }
        }
    }
    return R;
}

//console.log(solution(readProblem(process.argv[2] || 'input.txt')));
