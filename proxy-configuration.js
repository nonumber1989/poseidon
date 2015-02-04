module.exports = {
    port: 9000, //the proxy port use can access
    webServerPort: 10000,//start a static resource server use express framework
    backend: {
        paths: ['api'], //paths to send to backend server
        host: 'warship',
        port: '9090'
    }
};