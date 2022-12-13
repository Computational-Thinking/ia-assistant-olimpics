// An archipelago is made up of N islands,  some of which are connected by P bidirectional bridges.
// It is known that there is at most one bridge between each pair of islands.
// They want to build hospitals so that no one has to cross more than one bridge to get to a hospital.
// The problem is: What is the minimum number of hospitals needed?
// Write a function that, given the number of islands N, the number of bridges P, and the connections array between the islands,
// returns the minimum number of hospitals needed.
// The connections array  consist of an array of P  pairs [x, y], with x not equal to y, containing the islands connected by each bridge. 
// Assume N is greater than 1 and less or equal to 105, 
// Assumen P is between 0 and N, 
// Assume that the islands are natural numbers numbered from 0, and 
// Assume that there is no more than one bridge between two islands.

// example 1
const N = 10
const P = 6

const connections = [
  [0, 1],
  [3, 4],
  [4, 5],
  [6, 7],
  [7, 8],
  [8, 9],
]
// solution is 5

// example 2
connections2 = [
  [9, 8],
  [0, 4],
  [7, 0],
  [3, 5],
  [8, 6],
  [1, 6],
  [2, 8],
  [4, 1],
  [5, 1],
]
// solution is 3

// example 3
connections3 = [
  [5, 4],
  [0, 2],
  [2, 1],
  [1, 3],
  [1, 4],  
]
// solution is 2

function minimumHospitals(N, P, connections) {
  // find the diameter of the connections graph
  // the diameter is the longest path between two nodes
}