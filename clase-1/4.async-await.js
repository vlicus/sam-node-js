//  Para poder realizar TOP LEVEL await en CommonJs, debemos envolver
// el await en una función autoinvocada (IIFE)

const { readFile } = require("node:fs/promises");

// IIFE:
(async () => {
  console.log("Leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto: ", text);

  console.log("Hacer cosas mientras lee el archivo");

  console.log("Leyendo el segundo archivo...");
  const text2 = await readFile("./archivo2.txt", "utf8");
  console.log("Segundo texto: ", text2);
})();
