const http = require('http');

const express = require('express');

const app = express();

// it creates a middleware
app.use((req, res, next) => {
    console.log("in the middleware");
    next(); // it allows requests to next middleware in the line
});

app.use((req, res, next) => {
    console.log("in another middleware");
});

const server = http.createServer(app);

server.listen(3000);