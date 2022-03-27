var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res){
    const data = url.parse(req.url, true);
    let filename;
    if (req.url === '/'){
        filename = './index.html';
    }
    else if (req.url === '/about'){
        filename = './about.html';
    }
    else if (req.url === 'contact-me'){
        filename = './contact-me.html';
    }
    else{
        filename = './404.html';
    }
    //filename = data.pathname === '/' ? './index.html' : `./${data.pathname}.html`;
    console.log(req.url + ' ' + filename);

    fs.readFile(filename, function(err, data){
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('error');
        return res.end();
    });

}).listen(8091);