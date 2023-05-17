/* PREGUNTA:
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

Para este ejemplo la solución es "5"

Pongo otro ejemplo de entrada con 9 islas y 8 puentes:

9 8
0 4
7 0
3 5
8 6
1 6
2 8
4 1
5 1

Para este segundo ejemplo la solución es "3"

Un tercer ejemplo de entrada con 5 islas y 4 puentes:

5 4
0 2
2 1
1 3
1 4

el número mínimo de hospitales es "2"
*/

// SOLUCIÓN:
// Se puede resolver con un algoritmo voraz. Se ordenan los puentes por el número de islas que conectan. 
// Se van cogiendo los puentes de uno en uno y se van añadiendo a la solución si no conectan islas ya conectadas. 

// Se lee la entrada y se guarda en un array de puentes
var fs = require('fs');
var fileName = process.argv[2];
var input = fs.readFileSync(fileName).toString().split('\n');
var n = parseInt(input[0].split(' ')[0]);
var p = parseInt(input[0].split(' ')[1]);
console.log(n,p); //H
var puentes = [];
for (var i = 1; i <= p; i++) {
    var puente = input[i].split(' ');
    puentes.push([parseInt(puente[0]), parseInt(puente[1])]);
}

console.log(puentes); //H

// Se ordenan los puentes por el número de islas que conectan
puentes.sort(function(a, b) { //H: mal!
    return a[0] - b[0];
}
);

console.log(puentes); //H

// Se van cogiendo los puentes de uno en uno y se van añadiendo a la solución si no conectan islas ya conectadas.
var solucion = [];
for (var i = 0; i < puentes.length; i++) {
    var puente = puentes[i];
    if (solucion.length === 0) {
        solucion.push(puente);
    } else {
        var isla1 = puente[0];
        var isla2 = puente[1];
        var conectada1 = false;
        var conectada2 = false;
        for (var j = 0; j < solucion.length; j++) {
            var sol = solucion[j];
            if (sol.indexOf(isla1) !== -1) {
                conectada1 = true;
            }
            if (sol.indexOf(isla2) !== -1) {
                conectada2 = true;
            }
        }
        if (!conectada1 && !conectada2) {
            solucion.push(puente);
        }
    }
}

// Se imprime la solución
console.log(solucion); //H
console.log(solucion.length);

