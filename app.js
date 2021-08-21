const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<html>KEHINDE JEJELAYE</html>");
    res.end();
}).listen(8080);