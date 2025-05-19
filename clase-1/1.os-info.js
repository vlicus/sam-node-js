const os = require("node:os");

console.log("Información del OS");

console.log("------------------------------------");

console.log("Nombre del OS", os.platform());
console.log("Versión del OS", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUS", os.cpus());
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60);
