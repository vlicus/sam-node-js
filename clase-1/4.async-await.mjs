import { readFile } from "node:fs/promises";

// TOP LEVEL AWAIT. Con ES modules podemos hacer await en el top level,
// sin necesidad de envolverla en ninguna función asíncrona.

console.log("Leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8");
console.log("Primer texto: ", text);

console.log("Hacer cosas mientras lee el archivo");

console.log("Leyendo el segundo archivo...");
const text2 = await readFile("./archivo2.txt", "utf8");
console.log("Segundo texto: ", text2);
