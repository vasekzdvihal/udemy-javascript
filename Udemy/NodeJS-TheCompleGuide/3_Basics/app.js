// Core modules
// http (web server) -> Launch a server, send requests, get responses
// https (secure http) -> Launch a server, send requests, get responses (secure)
// fs (file system) -> Read and write files
// path (cross-platform) -> Get path to files and directories
// os (operating system) -> Get info about the operating system

// require() is a function that allows us to import modules into our file
// ./ - relative path
// / - absolute path
// just the name - core module
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);
