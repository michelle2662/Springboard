const fs = require("fs/promises");
const axios = require("axios");
const process = require("process");
const MarkovMachine = require("./markov"); 

function generateText(text) {
  const mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

async function makeText(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    generateText(data);
  } catch (err) {
    console.error(`Cannot read file "${path}": ${err.message}`);
    process.exit(1);
  }
}

async function makeURLText(url) {
  try {
    const resp = await axios.get(url);
    generateText(resp.data);
  } catch (err) {
    console.error(`Cannot fetch URL "${url}": ${err.message}`);
    process.exit(1);
  }
}

async function main() {
  const [method, path] = process.argv.slice(2);

  if (method === "file") {
    await makeText(path);
  } else if (method === "url") {
    await makeURLText(path);
  } else {
    console.error(`Unknown method: "${method}". Use "file" or "url".`);
    process.exit(1);
  }
}

main();
