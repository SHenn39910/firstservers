
//template server
const http = require('http');
const host = 'localhost';
const port = 8000;
const fs = require('fs').promises;

//new variable
let indexFile;

//what to return
const requestListener= function(req, res){
    fs.readFile(__dirname + '/index.html')
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
        })
        .catch(err => {
            res.writeHead(200);
            res.end(err);
            return;
        });
};

//actual server with port

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
    });
})
.catch(err => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
});


