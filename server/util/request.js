const req = require('request');

const request = (options) =>
  new Promise((resolve, reject) => {
    req(options, (err, response, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });

module.exports = request;
