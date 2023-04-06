---
title: Uso de Asistentes IA en concursos de Programación
sidebar: auto
---

## Objetivos

Este repositorio y este artículo contienen el material, informe y conclusiones 
de una investigación que nos planteamos los autores sobre el uso de los asistentes IA en la enseñanza de la programación.

Nuestro objetivo es evaluar y comparar las capacidades de los diferentes asistentes IA para proveer soluciones a problemas como los que se plantean en la enseñanza de la programación.

### Asistentes IA utilizados

Decidimos usar todos los asistentes IA a nuestro alcance: Chat-GPT 3 y 4 y GitHub Copilot.
Nos hubiera gustado probar GitHub Copilot X pero en el momento de hacer el estudio no tenemos acceso al mismo.

### Problema

Para medir las capacidades de los asistentes IA planteamos un problema de las Olimpiadas de Informática Española. El problema elegido ha sido el [P31958_es](pdfs/problem.pdf) que hemos tomado de [jutge.org](https://jutge.org/problems/P31958_es)

## Casos de Ejemplo del Problema

### Primer caso

El primer ejemplo que puede encontrar en el fichero [input.txt](/input-examples/input.txt) es

```
10 6
0 1
3 4
4 5
6 7
7 8
8 9
```

Cuyo grafo es:

```mermaid
graph LR
    6((6)) <--> 7((7))
    7 <--> 8((8))
    8 <--> 9((9))
    3((3)) <--> 4((4))
    4 <--> 5((5))
    0((0)) <--> 1((1))
    2((2))
```

Es fácil ver que es posible encontrar una solución con 5 hospitales.

### Segundo caso

El segundo ejemplo que puede encontrar en el fichero [input2.txt](/input-examples/input2.txt) es 

```
9 8
0 4
7 0
3 5
8 6
1 6
2 8
4 1
5 1
```

cuyo grafo es:

```mermaid
graph LR
    0((0)) <--> 4((4))
    7((7)) <--> 0((0))
    3((3)) <--> 5((5))
    8((8)) <--> 6((6))
    1 <--> 6((6))
    2((2)) <--> 8((8))
    4 <--> 1((1))
    5 <--> 1
```

Es posible encontrar una solución con 3 hospitales, poniéndolos en 0, 5 y 8.

### Tercer caso

El tercer ejemplo que puede encontrar en el fichero [input3.txt](/input-examples/input3.txt) es 

```
5 4
0 2
2 1
1 3
1 4
```
whose graph is:

```mermaid
graph LR
    0((0)) <--> 2((2))
    2((2)) <--> 1((1))
    1((1)) <--> 3((3))
    1((1)) <--> 4((4))
```

y que puede resolverse con solo 2 hospitales.


## Como utilizar este repositorio

En este repositorio existen las siguientes ramas:

```
➜  docs git:(main) ✗ git -P branch
  chat-gpt-3
  chat-gpt-4
+ chat-gpt-4-allocation-problem
  chat-gpt-4-human
  chat-gpt3-human
  chat-gpt3-human-sortedbynumedges
* main
```

* La rama [chat-gpt-3](https://github.com/Computational-Thinking/ia-assistant-olimpics/tree/chat-gpt-3) contiene la solución propuesta por chat-gpt-3.  Esta es la idea que usa:
*Una posible solución al problema es utilizar el algoritmo de coloración de grafos conocido como "Greedy Coloring". La idea es ir asignando un color a cada isla de tal forma que islas adyacentes no tengan el mismo color. El número mínimo de colores necesarios para colorear todas las islas es entonces igual al número mínimo de hospitales necesarios*. 
Aunque la idea es correcta, cuando se ejecuta el programa que proporciona, los resultados son erróneos.
* La rama `chat-gpt-3-human` contiene la solución propuesta por chat-gpt-3 modificada por un programador para que la salida muestre los resultados correctos.
* La rama `chat-gpt3-human-sortedbynumedges` es una modiicación de la solución en `chat-gpt-3-human` con una modificación que ordena primero ls islas por número de puentes y después aplica el algoritmo de coloración encontrado por chat-gpt-3.
* La rama [chat-gpt-4](https://github.com/Computational-Thinking/ia-assistant-olimpics/tree/chat-gpt-4) contiene la solución propuesta por chat-gpt-4. 
Ofrece la misma aproximación que 3, pero se ecplcia mejor:
*Para resolver este problema, se puede utilizar el algoritmo 
de coloración de grafos, que consiste en asignar un color a 
cada vértice de tal forma que dos vértices adyacentes 
no tengan el mismo color. En este caso, los vértices representan 
las islas y las aristas representan los puentes.
El número mínimo de hospitales necesarios es igual al 
número cromático del grafo, es decir, 
el número mínimo de colores necesarios para colorear el 
grafo de tal forma que dos vértices adyacentes no tengan el mismo color.*
Al igual que con gpt-3, los resultados proveídos por el programa son erróneos.
* La rama `chat-gpt-4-human` contiene la solución propuesta por chat-gpt-4 modificada por un programador para que la salida muestre resultados correctos.
* La rama `chat-gpt-4-allocation-problem` contiene la solución propuesta por chat-gpt-4 y modificada por un programador a partir de una reformulación del problema diferente a la del enunciado usado en la olimpiada. `chat-gpt-4` provee en este caso un algoritmo heurístico con backtracking.
* Esta rama: la rama `main` la hemos usado para la documentación y el blog.


## Referencias

* [jutge.org](https://jutge.org/problems/P31958_es)