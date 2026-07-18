const fs = require('fs');
const path = require('path');

const directoriesToScan = ['src'];
const fileExtensions = ['.ts', '.tsx'];

const regexesToRemove = [
  /\/\/\s*@ts-nocheck/gi,
  /\/\/\s*@ts-ignore/gi,
  /\/\/\s*eslint-disable-next-line.*/gi,
  /\/\/\s*eslint-disable.*/gi,
  /\/\*\s*eslint-disable[\s\S]*?\*\//gi
];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else {
      if (fileExtensions.some(ext => fullPath.endsWith(ext))) {
        processFile(fullPath);
      }
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let modified = false;

  for (const regex of regexesToRemove) {
    if (regex.test(content)) {
      content = content.replace(regex, '');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed ignores from: ${filePath}`);
  }
}

for (const dir of directoriesToScan) {
  const fullPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(fullPath)) {
    scanDirectory(fullPath);
  }
}
console.log('Ignore comments cleanup complete.');
