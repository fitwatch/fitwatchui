http.createServer(function(req,res){
// normalize url by removing querystring, optional // trailing slash, and making lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '')
        .toLowerCase(); switch(path) {
        case '':
            serveStaticFile(res, '/dist/index.html', 'text/html'); break;
        case '/about':
            serveStaticFile(res, '/dist/index.html', 'text/html'); break;
        case '/img/logo.jpg':
            serveStaticFile(res, '/dist/index.html', 'text/html'); break;

        default:
            serveStaticFile(res, '/public/404.html', 'text/html',
                404); break;
    }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

