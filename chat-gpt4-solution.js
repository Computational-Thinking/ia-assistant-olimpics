/*
Same question as in branch "chatgpt-2nd-attempt" but to chat-gpt-4 (Bing).
*/

// Función para leer la entrada desde un archivo
function readInputFile(inputFile) {
  const fs = require('fs');
  const input = fs.readFileSync(inputFile, 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [n, p] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));

  console.log(`n = ${n}, p = ${p}, edges = ${JSON.stringify(edges)}}`)
  return [n, edges];
}

function DFS(p, v, visited, adj, colors) {
    visited[v] = true;
    colors[v] = (p !== null)? 1 - colors[p] : 0;
    console.error(`coloring ${v} of color ${colors[v]} with parent ${p}`)
    for (let i = 0; i < adj[v].length; i++) {
        if (!visited[adj[v][i]]) {
            DFS(v, adj[v][i], visited, adj, colors);
        }
    }
}

function minHospitals(n, edges) {
    let adj = new Array(n).fill(null).map(() => []);
    let visited = new Array(n).fill(false);
    let colors = new Array(n).fill(null);

    let count = 0;
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            DFS(null, i, visited, adj, colors);
            count++;
        }
    }
    return { count, colors };
}

// Modified by human to get the input from file
const inputFile = process.argv[2] || 'input.txt'; // Nombre del archivo de entrada
const [n, edges] = readInputFile(inputFile);

console.log(minHospitals(n, edges)); // Output: 5

/*
Espero que esto te ayude a resolver tu problema. ¡Buena suerte! 😊

Origen: Conversación con Bing, 4/4/2023(1) Leer archivos en JavaScript. https://web.dev/i18n/es/read-files/ Con acceso 4/4/2023.
(2) Leer archivo de texto en JavaScript | Delft Stack. https://www.delftstack.com/es/howto/javascript/read-text-file-in-javascript/ Con acceso 4/4/2023.
(3) Leer archivo línea por línea en JavaScript | Delft Stack. https://www.delftstack.com/es/howto/javascript/javascript-read-file-line-by-line/ Con acceso 4/4/2023.
(4) Cómo leer un archivo de texto con código de Javascript en HTML (En 6 .... https://techlandia.com/leer-archivo-texto-codigo-javascript-html-como_43910/ Con acceso 4/4/2023.
(5) html - ¿Cómo leer un archivo .txt desde JavaScript? - Stack Overflow en .... https://es.stackoverflow.com/questions/54734/c%C3%B3mo-leer-un-archivo-txt-desde-javascript Con acceso 4/4/2023.
(6) Lectura de archivos con JavaScript - Stack Overflow en español. https://es.stackoverflow.com/questions/193178/lectura-de-archivos-con-javascript Con acceso 4/4/2023.
(7) Cómo leer un archivo de texto con código de Javascript en HTML (En 6 .... https://techlandia.com/leer-archivo-texto-codigo-javascript-html-como_43910/ Con acceso 4/4/2023.
*/