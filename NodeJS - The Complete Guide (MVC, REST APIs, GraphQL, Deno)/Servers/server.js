const http = require("http");
const fs = require("fs");

// function rqListener(req,res) {

// }

// createServer creates a server and returns a null value

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head>My first page</head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>My first page</head>');
    res.write('<body>Hello from Nodejs Server</body>')
    res.write('</html>');
    res.end();
    // res.write(); it will send error because it is used after res.end();
    //process.exit(); // It gets it out of event loop which runs forever
});

// listen is used to expose port on machine 
server.listen(3000);
