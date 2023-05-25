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

Write a JavaScript function `findDistances(graph)` that takes as input a graph description as returned by the `readProblem` function and returns the matrix with the distances between each pair of nodes. The distance of a node to a node that is not reachable from the given node is `Infinity`. For example, for the graph above, the function should return the following array for node 0:


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

## Question distanceToSubset(node, R)

Given the `graph` as returned by the `readProblem` function write a  function `distanceToSubset(node, R)` that computes the distance of `node` to the subset of nodes `R`

## Question randomNode(number)

Write a function `randomNode(number)` that returns an integer random number between `0` and `number-1`


## Question allocateResources(order) Heuristic 1

Write a heuristic function `allocateResources(order)` that takes 
as input `order` a permutation of the nodes of the `graph`. 
The function returns a minimum size subset `R` of nodes such that the 
distance of any node to the subset `R` is not greater than one. 
Traverse the nodes in the order given by the `order` array. 

For example, for the graph above, the function should return a set with the elements in the following array:

```js
[0, 2, 4, 6, 8]
```

the function can be called this way:

```js
import arrayShuffle from 'array-shuffle';
let order = arrayShuffle(Array.from({ length: graph.length }, (_, i) => i))
console.log(allocateResources(order)) // Set(5) { 0, 2, 4, 6, 8 }
```

## Question explore(t) Heuristic 2

Write a function `explore(t)` that receives as input `t`, the number of iterations. 
It uses the graph returned by the `readProblem` function and  

1. Initializes `bestSize`to `Infinity` and `bestSet` to `[]`.
2. repeats `t` times these steps:
  1. Shuffles the `graph` (use the `arrayShuffle` function that shuffles an array and is exported by the module `array-shuffle`) and 
  2. Uses the `allocateResources(order)` above to find a subset candidate `R`.
  3. If the new set `R` has smaller size than the best set found so far, the `bestSet` is updated.
3. The function should return the `bestSet` found.

Can be called this way:

```js
console.log(explore(graph, 10)) 
```