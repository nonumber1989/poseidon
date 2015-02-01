module.exports = {
    port: 8000,
    webServerPort: 3000,
    backend: {
        paths: ['api'], //paths to send to backend server
        host: 'warship',
        port: '8080',
        context: '' //context path of backend server
    }
};