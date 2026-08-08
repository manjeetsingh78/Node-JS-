const express = require('express');

const app = express();


// Note:  Express checks middleware from top to bottom.

/*

Why /path is before /?

Because / is a very broad path.

app.use("/", ...) matches almost every URL, including:
/
 /path
 /hello
 /abc
 /path/test
Whereas:

app.use("/path", ...)

matches URLs beginning with /path, such as:

/path
/path/test
/path/anything

*/

app.use("/path",(req, res, next) => {
    console.log("in another middleware");
    res.send("<h1>Hello from Path endpoint</h1>");
});

app.use("/",(req, res, next) => {
    console.log("in another middleware");
    res.send("<h1>Hello from Express</h1>");
});

//const server = http.createServer(app);

app.listen(3000);