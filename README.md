# Branch chat-gpt-4

Contains a solution using chat-gpt-4 (chat in Bing search, April 3d 2023).

## Formulating the question

I copy pasted the question as in file [LEEme.md](LEEme.md)

As you can see the text was truncated by the app. In spite of that the answer seems to be quite adapted to what we were looking for. See file [chat-gpt-4-solution.js](chat-gpt4-solution.js)


Here is an execution with the program as described by chat-gpt-4:

```
➜  P31958_es git:(chat-gpt-4) ✗ node chat-gpt4-solution.js 
4 
```

That seems correct.

## Initial Description

 An archipelago is made up of N islands,  some of which are connected by P bidirectional bridges.
 It is known that there is at most one bridge between each pair of islands.
 They want to build hospitals so that no one has to cross more than one bridge to get to a hospital.
 The problem is: What is the minimum number of hospitals needed?
 Write a function that, given the number of islands N, the number of bridges P, and the connections array between the islands,
 returns the minimum number of hospitals needed.
 The connections array  consist of an array of P  pairs [x, y], with x not equal to y, containing the islands connected by each bridge. 
 Assume N is greater than 1 and less or equal to 105, 
 Assumen P is between 0 and N, 
 Assume that the islands are natural numbers numbered from 0, and 
 Assume that there is no more than one bridge between two islands.

For the full text see the pdf file [problem.pdf](problem.pdf)
