var http = require('http');

var server = http.createServer();
server.on('request',doRequest);
server.listen(process.env.PORT, process.env.IP);
console.log('Server running!');

// ���N�G�X�g�̏���
function doRequest(req, res) {
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.write('Hello World\n');
    res.end();
}
