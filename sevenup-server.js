'use strict';

var express = require('express'),
    http = require('http'),
    httpProxy = require('http-proxy'),
    colors = require('colors'),
    slash   = require('express-slash'),
    path = require('path'),
    util = require('util'),
    conf = require('./proxy-configuration'),
    url = require('url');

var proxy = httpProxy.createProxyServer({});
var staticPath = __dirname + '/app';
var backendPathRegExp = new RegExp('\/(' + conf.backend.paths.join('|') + ')');
//
// Setup proxy server with forwarding
//
httpProxy.createProxyServer({});
//
// Target Http Forwarding Server
//
http.createServer(function (req, res) {
//    util.puts('Receiving forward for: ' + req.url);
    if(req.url.indexOf("/api/")!=-1){
        util.puts('API Now '.blue + req.url);
    }else{
        proxy.web(req, res, { target: 'http://localhost:10000/warship' });
    }
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.write('request successfully forwarded to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
//    res.end();
}).listen(conf.port);

/***** start a server use static resource *****/
var app = express();
app.enable('strict routing');
app.use(slash());
app.get('/warship/', function(req, res){
        res.sendfile(staticPath+'/index.html');
});
app.use('/warship/',express.static(staticPath));
var server = http.createServer(app);
server.listen(conf.webServerPort);

util.puts('http proxy  server '.blue + 'started '.green.bold + 'on port '.blue + conf.port+' '.yellow + 'with forward proxy'.magenta.underline);
util.puts('http static server '.blue + 'started '.green.bold + 'on port '.blue + conf.webServerPort+' '.yellow);
util.puts('RESt API Will send '.blue + 'to '.green.bold + 'the port '.blue + conf.backend.port+' '.yellow);