const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Hello World 1!');
    response.write('<h1>Hello World 2!');
    response.end();
});

server.listen(8080, "localhost");