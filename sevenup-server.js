'use strict';

var express = require('express'),
    http = require('http'),
    httpProxy = require('http-proxy'),
    colors = require('colors'),
    slash   = require('express-slash'),
    path = require('path'),
    util = require('util'),
    url = require('url');

var proxy = httpProxy.createProxyServer({});
var staticPath = __dirname + '/app';
//
// Setup proxy server with forwarding
//
httpProxy.createProxyServer({});
//
// Target Http Forwarding Server
//
http.createServer(function (req, res) {
    util.puts('Receiving forward for: ' + req.url);
    proxy.web(req, res, { target: 'http://localhost:10000/warship' });
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.write('request successfully forwarded to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
//    res.end();
}).listen(9019);

util.puts('http proxy server '.blue + 'started '.green.bold + 'on port '.blue + '8080 '.yellow + 'with forward proxy'.magenta.underline);
util.puts('http forward server '.blue + 'started '.green.bold + 'on port '.blue + '9019 '.yellow);

/***** start a server use static *****/
var app = express();
app.enable('strict routing');
app.use(slash());
app.get('/warship/', function(req, res){
        res.sendfile(staticPath+'/index.html');
});
app.use('/warship/',express.static(staticPath));
var server = http.createServer(app);
server.listen(10000);