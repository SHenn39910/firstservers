
//template server
const http = require('http');
const host = 'localhost';
const port = 8000;

//what to return
const requestListener= function(req, res){

};

//actual server with port

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



