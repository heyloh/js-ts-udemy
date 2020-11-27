const fs = require('fs').promises;

module.exports = (filePath, data) => {
  return fs.writeFile(filePath, data, {
    flag: 'w',
    encoding: 'utf8',
  });
}
