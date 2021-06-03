
//template server
const http = require('http');
const host = 'localhost';
const port = 8000;

//what to return
const requestListener= function(req, res){
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1, Sonja Hennessy, sonja@me.com`);
};

//actual server with port

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

