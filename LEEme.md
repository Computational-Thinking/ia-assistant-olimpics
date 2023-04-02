Puedes ayudarme a escribir un programa JavaScript que resuelva el siguiente problema:

Se tiene un archipiélago que está constituido por "n" islas, algunas de las cuales están conectadas por puentes bi-direccionales. Se sabe que hay como mucho un camino entre cada par de islas.

Se quieren construir hospitales de manera que nadie tenga que cruzar más de un puente para llegar a un hospital. El programa debe computar el mínimo número de hospitales necesarios.

Paso a describir como es la entrada.

La entrada consiste en un fichero con 

1. En la  primera línea, el número de islas "n" y el número de puentes "p" separados por un blanco. Por ejemplo: "10 6" indica que hay n=10 islas y p=6 puentes.
2. En las siguientes "p" líneas del fichero de entrada aparecen pares de números "x y", con "x" distinto de "y" indicando el par de islas conectadas por cada puente. Una línea como "0 1" indica que la isla "0" está conectada mediante un puente con la isla "1". 
3. Se supone que n es menor o igual que 10000, que las islas se numeran desde 0 y que no hay más de un puente entre dos islas.

Sigue un ejemplo completo de entrada con 10 islas y 6 puentes:

10 6
0 1
3 4
4 5
6 7
7 8
8 9

Otro ejemplo de entrada con 9 islas y 8 puentes:

9 8
0 4
7 0
3 5
8 6
1 6
2 8
4 1
5 1

Un tercer ejemplo de entrada con 5 islas y 4 puentes:

5 4
0 2
2 1
1 3
1 4

paso a describir como debe ser la salida.

Hay que simplemente escribir número mínimo de hospitales.

Ejemplo de salida para las entrada anteriores:

1. Para el primer ejemplo escribir "5"
2. Para el segundo ejemplo escribir "3"
3. Para el tercer ejemplo escribir "2"
