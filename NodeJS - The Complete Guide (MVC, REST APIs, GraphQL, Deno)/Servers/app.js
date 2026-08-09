const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

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


app.use("/add-product",(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use("/",(req, res, next) => {
    res.send('<h1>Hello from express</h1>');
});

//const server = http.createServer(app);

app.listen(3000);