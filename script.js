// read the txt file and parse the url
import { writeFile, readFile } from 'fs/promises';

function parseUrl(url) {
  const urlObj = new URL(url);
  const urlParam = urlObj.searchParams.get('url');
  const decodedUrl = decodeURIComponent(urlParam);
  return decodedUrl;
}

async function readTxtFile(filePath) {
  const fileData = await readFile(filePath, 'utf8');
  return parseUrl(fileData);
}


let buffer = "";
const borkenUrl = await readTxtFile('broken.txt');
buffer += "🛑 broken link\n"
buffer += borkenUrl;

buffer += "\n"

const workingUrl = await readTxtFile('working.txt');
buffer += "✅ working link\n";
buffer += workingUrl;

console.log(buffer);

// overwrite write to the readme
await writeFile('README.md', buffer, 'utf8');

