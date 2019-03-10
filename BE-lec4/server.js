const http = require('http');
const jsonData = require('./generated.json');
const port = 3000;

const requestHandler = (request, response) => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
    };
    if (request.method === 'OPTIONS') {
        response.writeHead(204, headers);
        response.end();
        return;
    }
    if (request.method === 'GET' && request.url === '/echo') {
        response.writeHead(200, headers);
        response.end(JSON.stringify(jsonData));
        return;
    }
};
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});

