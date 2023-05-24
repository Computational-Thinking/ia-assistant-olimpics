## Question readProblem

Write a JavaScript function readProblem(fileName) that reads a file containing an undirected graph description with the following format:

1. The first line contains the number of nodes and the number of edges in the graph, separated by a space.
2. The following lines contain the edges of the graph, one edge per line, with the two nodes of the edge separated by a space. Here is an example of a graph description file:

  ```
  10 6
  0 1
  3 4
  4 5
  6 7
  7 8
  8 9
  ```
3. The function should return an array indexed on the  nodes of the graph, where each element of the array is a set containing the nodes adjacent to the node corresponding to the index. For example, for the graph above, the function should return the following array:

  ```js
  [[1], [0], [], [4], [3, 5], [4], [7], [6, 8], [7, 9], [8]]
  ```
4. The function should throw an exception if the file does not exist or if the file does not contain a valid graph description.
5. Use ES6 syntax.

## Question findDistances

Write a JavaScript function `findDistances(graph)` that takes as input a graph description as returned by the `readProblem` function returns the matrix with the distances between each pair of nodes. The distance of a node to a node that is not reachable from the given node is `Infinity`. For example, for the graph above, the function should return the following array for node 0:


```js
[
  [
           0,        1,
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
           1,        0,
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
    Infinity, Infinity,
           0, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
    Infinity, Infinity,
    Infinity,        0,
           1,        2,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
    Infinity, Infinity,
    Infinity,        1,
           0,        1,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
    Infinity, Infinity,
    Infinity,        2,
           1,        0,
    Infinity, Infinity,
    Infinity, Infinity
  ],
  [
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
           0,        1,
           2,        3
  ],
  [
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
           1,        0,
           1,        2
  ],
  [
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
           2,        1,
           0,        1
  ],
  [
    Infinity, Infinity,
    Infinity, Infinity,
    Infinity, Infinity,
           3,        2,
           1,        0
  ]
]
```

## Question 

How can I write a JavaScript function that gives the solution to this problem: "Given a undirected graph G = (V,E), find the smallest subset R of V such that the distance of any node to the subset R is not greater than one?"
