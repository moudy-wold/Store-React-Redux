var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './src/css/index.css',
    port: 8000,
})