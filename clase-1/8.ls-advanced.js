const fs = require("node:fs/promises");
const path = require("node:path");
const picocolors = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.log(picocolors.red(`No se ha podido leer el directorio ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch {
      console.error(picocolors.red(`❌ No se ha podido leer el archivo ${filePath}`));
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${picocolors.magenta(fileType)} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(
      fileSize.toString().padStart(10)
    )} ${picocolors.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
