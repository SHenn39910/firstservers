
//template server
const http = require('http');
const host = 'localhost';
const port = 8000;

//what to return
const requestListener= function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

//actual server with port

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



