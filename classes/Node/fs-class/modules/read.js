const fs = require('fs').promises;

module.exports = (filePath) => {
  return fs.readFile(filePath, 'utf8');
}