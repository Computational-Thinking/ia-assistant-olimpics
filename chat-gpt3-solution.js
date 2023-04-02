// Función para leer la entrada del archivo y parsearla
function leerEntrada(input) {
  const lineas = input.trim().split('\n');
  const [n, p] = lineas[0].split(' ').map(Number);
  const puentes = lineas.slice(1).map(l => l.split(' ').map(Number));
  return { n, p, puentes };
}

// Función para encontrar el número mínimo de hospitales necesarios
function encontrarHospitales(n, puentes) {
  const adyacencia = new Array(n).fill(null).map(() => []);
  for (const [a, b] of puentes) {
    adyacencia[a].push(b);
    adyacencia[b].push(a);
  }

  const hospitales = new Set();
  for (let i = 0; i < n; i++) {
    if (!hospitales.has(i)) {
      const visitados = new Set([i]);
      for (const j of adyacencia[i]) {
        visitados.add(j);
      }
      for (const j of adyacencia[i]) {
        for (const k of adyacencia[j]) {
          visitados.add(k);
        }
      }
      for (const j of adyacencia[i]) {
        for (const k of adyacencia[j]) {
          if (!visitados.has(k)) {
            hospitales.add(j);
            break;
          }
        }
      }
      if (!hospitales.has(i)) {
        hospitales.add(i);
      }
    }
  }

  return hospitales.size;
}

// Ejecución del programa
const entrada = `10 6
0 1
3 4
4 5
6 7
7 8
8 9`;
const { n, p, puentes } = leerEntrada(entrada);
const hospitalesNecesarios = encontrarHospitales(n, puentes);
console.log(hospitalesNecesarios);
