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
var staticPath = '/app';

var login=false;
http.createServer(function(req, res) {
    if (req.url.match(backendPathRegExp)) {
        if (conf.backend.context) {
            var reqUrl = url.parse(req.url);
            req.url = conf.backend.context + reqUrl.path;
        }
        console.log('Forwarding request to backend server %s'.cyan, req.url);
        req.headers["Host"] = "gpcollect.com:8080";
        proxy.proxyRequest(req, res, {
            host: conf.backend.host,
            port: conf.backend.port
        });
        if(req.url.indexOf("/api/auth/login")!=-1){
            console.log('logined');
            login = true;
        }
        if(req.url.indexOf("/api/auth/logout")!=-1){
            console.log('logined');
            login = false;
        }
        res.oldWriteHead = res.writeHead;
        res.writeHead = function(statusCode, headers) {
            if(statusCode == 403){
                console.log(statusCode);
                login = false;
            }
            res.oldWriteHead(statusCode, headers);
        }
    } else {
        //console.log('Forwarding request to web server %s'.yellow, req.url);
        proxy.proxyRequest(req, res, {
            host: 'localhost',
            port: conf.webServerPort
        });

    }
}).listen(9000, function() {
    console.log('proxy listening on port 9000');
});


/***** Reverse Proxy Server - Section END *****/

/***** Express Web Server - Section START *****/
var app = express();

app.enable('strict routing');

app.use(slash());

app.get('/warship/', function(req, res){
    if(!login){
        res.sendfile(staticPath+'/index.html');
    }else{
        res.sendfile(staticPath+'/index.html');
    }
});

app.use('/warship/',express.static(staticPath));
var server = http.createServer(app);
//server.listen(conf.webServerPort);
server.listen(9000);
console.log('Web server running on port %s'.grey, server.address().port);
console.log('Proxy server running on port %s. Use url http://localhost:%s to access the application.'.grey, conf.port,conf.port);
/***** Express Web Server - Section END *****/