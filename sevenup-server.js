'use strict';
var util = require('util'),
    colors = require('colors'),
    http = require('http'),
    httpProxy = require('http-proxy');

//
// Setup proxy server with forwarding
//
httpProxy.createServer({
    forward: {
        port: 9019,
        host: 'localhost'
    }
}).listen(8080);

//
// Target Http Forwarding Server
//
http.createServer(function (req, res) {
    util.puts('Receiving forward for: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully forwarded to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(9019);

util.puts('http proxy server '.blue + 'started '.green.bold + 'on port '.blue + '8080 '.yellow + 'with forward proxy'.magenta.underline);
util.puts('http forward server '.blue + 'started '.green.bold + 'on port '.blue + '9019 '.yellow);