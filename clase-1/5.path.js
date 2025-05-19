const path = require("node:path");

// barra separadora directorio según OS
console.log(path.sep);
// unir rutas con path.join

// Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Nombre del fichero con extensión
const base = path.basename("/tmp/midudev-secret-files/password.txt");
console.log(base);

// Nombre fel dichero sin extensión
const baseNoExtension = path.basename("/tmp/midudev-secret-files/password.txt", ".txt");
console.log(baseNoExtension);

// Extensión
const extension = path.extname("my.super.image.jpg");
console.log(extension);
