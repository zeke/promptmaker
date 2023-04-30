#!/usr/bin/env node

/* before use:
cd promptmaker
git clone https://github.com/pharmapsychotic/clip-interrogator
*/

const fs = require("fs").promises;
const path = require("path");

const directoryPath = path.join(
  __dirname,
  "../clip-interrogator/clip_interrogator/data"
);

async function readTextFiles() {
  try {
    const files = await fs.readdir(directoryPath);
    console.log({ files });
    const textFilesObject = {};

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const data = await fs.readFile(filePath, "utf-8");
      const lines = data.split("\n");
      const fileName = path.basename(file, ".txt");
      console.log(fileName);
      textFilesObject[fileName] = lines;
    }

    const json = JSON.stringify(textFilesObject, null, 2);
    await fs.writeFile("data.json", json, "utf-8");
    console.log("Successfully wrote data.json");
  } catch (err) {
    console.error(err);
  }
}

readTextFiles();
