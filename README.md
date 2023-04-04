# Branch chat-gpt-4

Contains a solution using chat-gpt-4 (chat in Bing search, April 3d 2023).

## Formulating the question

I copy pasted the question as in other branches inside the chat box:

```
Puedes ayudarme a escribir un programa JavaScript que resuelva el siguiente problema: 
Se tiene un archipiélago que está constituido por "n" islas, 
algunas de las cuales están conectadas por puentes bi-direccionales. 
Se sabe que hay como mucho un camino entre cada par de islas. 
Se quieren construir hospitales de manera que nadie tenga que 
cruzar más de un puente para llegar a un hospital. 
El programa debe computar el mínimo número de hospitales necesarios. 
Paso a describir como es la entrada. 
La entrada consiste en un fichero con 
1. En la primera línea, el número de islas "n" y el número de puentes "p" separados por un blanco. 
  Por ejemplo: "10 6" indica que hay n=10 islas y p=6 puentes.
2. En las siguientes "p" líneas del fichero de entrada aparecen pares de números "x y", con "x" distinto de "y" indicando el par de islas conectadas por cada puente. 
  Una línea como "0 1" indica que la isla "0" está conectada mediante 
  un puente con la isla "1". 
3. Se supone que n es menor o igual
```

As you can see the text was truncated by the app. In spite of that the answer seems to be quite adapted to what we were looking for. See file [chat-gpt-4-solution.js](chat-gpt4-solution.js)


Here is an execution with the program as described by chat-gpt-4:

```
P31958_es git:(chat-gpt-4) node chat-gpt4-solution.js 
10
```

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
