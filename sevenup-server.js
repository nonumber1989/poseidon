'use strict';

var express = require('express'),
    http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    colors = require('colors'),
    conf = require('./develop-server-configuration'),
    slash   = require('express-slash'),
    path = require('path'),
    url = require('url');

var backendPathRegExp = new RegExp('\/(' + conf.backend.paths.join('|') + ')');
var staticPath = __dirname + '/app';

var login=false;
/***** Resource watch - Section END *****/

/***** Reverse Proxy Server - Section START *****/
// Create a proxy server with custom application logic

http.createServer(function(req, res) {
    var hostname = req.headers.host.split(":")[0];
    var pathname = url.parse(req.url).pathname;

    console.log(hostname);
    console.log(pathname);

    switch(hostname)
    {
        case 'foo.loc':
            proxy.web(req, res, { target: 'http://localhost:9001' });
            break;
        case 'bar.loc':
            proxy.web(req, res, { target: 'http://localhost:9002' });
            break;
        default:
            proxy.web(req, res, { target: 'http://localhost:9003' });
    }
}).listen(9000, function() {
    console.log('proxy listening on port 9000');
});


/***** Reverse Proxy Server - Section END *****/

/***** Express Web Server - Section START *****/
var app = express();

app.enable('strict routing');

app.use(slash());

app.get('/', function(req, res){
    if(!login){
        res.sendfile(staticPath+'/index.html');
    }else{
        res.sendfile(staticPath+'/index.html');
    }
});

app.use('/',express.static(staticPath));
var server = http.createServer(app);
//server.listen(conf.webServerPort);
server.listen(10000);
console.log('Web server running on port %s'.grey, server.address().port);
console.log('Proxy server running on port %s. Use url http://localhost:%s to access the application.'.grey,
    conf.port,
    conf.port);
/***** Express Web Server - Section END *****/