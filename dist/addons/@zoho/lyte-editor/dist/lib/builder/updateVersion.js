const fs = require('fs');
const path = require('path');

const PACKAGE_JSON_DIR = path.join(__dirname, '../../package.json');
const GLOBAL_FILE_DIR = path.join(__dirname, '../scripts/_led.js');//No I18n

const packageJson = require(PACKAGE_JSON_DIR);
const fileContent = fs.readFileSync(GLOBAL_FILE_DIR, 'utf-8');
const versionRegex = /(VERSION\s*:\s*['"])(.*?)(['"],)/g

fs.writeFileSync(
  GLOBAL_FILE_DIR,
  fileContent.replace(versionRegex, '$1' + packageJson.version + '$3')
);