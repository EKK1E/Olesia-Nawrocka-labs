const fs = require('fs');
const path = require('path');
const { mimeTypes } = require('./mime');

function staticFile(res, filePath, ext) {
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const fullPath = path.join(__dirname, '..', 'public', filePath);

  res.setHeader('Content-Type', contentType);

  fs.readFile(fullPath, function (err, data) {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    res.statusCode = 200;
    res.end(data);
  });
}

module.exports = {
  staticFile
};
