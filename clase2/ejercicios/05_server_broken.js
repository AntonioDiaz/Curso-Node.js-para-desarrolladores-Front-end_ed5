const http = require('http');
const url = require('url');

const serverDownImage = "https://i.ytimg.com/vi/ijcOKrWjQUQ/maxresdefault.jpg";
const urlApiFilm = "http://www.omdbapi.com/?apikey=e9b5e65a&s=";
const serverListeningPort = 8080;
let serverBroken = false;
console.log("server...");
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    const pathname = url.parse(request.url).pathname;
    
    if (serverBroken) {
        response.write("<img src='"+ serverDownImage +"'>");
    } else {
        switch (pathname) {
        case '/':
            response.end("<h1>Wellcome my friend</h1>");
            break;
        case '/contact':
            response.end("<h2>Contact secction:</h2>");
            break;
        case '/about':
            response.end("<h3>About secction:</h3>");
            break;
        case '/bug':
            response.end("<img src='"+ serverDownImage +"'>");
            serverBroken = true;
            break;
        case '/search':
            let filmToSearch = url.parse(request.url, true).query.search;
            response.write("film: " + filmToSearch);
            http.get(urlApiFilm + filmToSearch, (responseFilm) => {
                console.log('termino el get.....');
                let myData = "";
                responseFilm.on('data', (chunk)=> myData += chunk);
                responseFilm.on('end', () => {
                    response.end("<code>"+ myData);
                }
                );
            });
            break;    
        default:
            response.end("default");
        }
    }
});

server.listen(serverListeningPort, "localhost");
console.log("server listening on port " + serverListeningPort);

