'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
const path = require('path');

var app = (module.exports = loopback());

boot(app, __dirname);

app.use(loopback.static(path.resolve(__dirname, '../client')));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.

if (require.main === module) {
  app.start();
}
