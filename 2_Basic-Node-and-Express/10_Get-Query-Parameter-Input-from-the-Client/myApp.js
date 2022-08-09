var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
// when doesn't define path that's will be apply for all route
app.use((request, response, next) => {
    console.log("I'm a middleware...");
    console.log(request.method + ' ' + request.path + " - " + request.ip);
    next();
})

/** 8) Chaining middleware. A Time server */
//synthaxe 1
app.get("/now", (request, response, next) => {
    request.time = new Date().toString();
    next();
} , (request, response) => {
    response.json({"time": request.time});
})

//synthaxe 2
app.get("/synthaxe", (request, response, next) => {
    request.time = new Date().toString();
    next();
});

app.get("/synthaxe", (request, response) => {
    response.json({"time": request.time});
})


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World")
console.log(__dirname);

/** 2) A first working Express Server */
// app.listen(3000) // already define inside server.js
/*
app.get('/', (request, response) => {
    response.send('Hello Express')
});
*/

/** 4) Serve static assets  */
// when a request are made for /public express will map that path with the absolute path of /public so instead of looking at /public express will look /public absolute path
app.use('/public', express.static(__dirname + "/public"))

/** 3) Serve an HTML file */
app.get('/', (request, response) => {
    let absolutePath = __dirname + "/views/index.html";
    response.sendFile(absolutePath);
});


/** 5) serve JSON on a specific route */
/** 6) Use the .env file to configure the app */
let message = {"message": "Hello json"};
app.get("/json", (request, response) => {
    // replit
    let mySecret = process.env['MESSAGE_STYLE']
    if(mySecret === "uppercase")
    {
      response.json({"message": "HELLO JSON"});
    }
    else
    {
      response.json(message);
    }
})


 
/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", (request, response) => {
    response.json({"echo": request.params.word})
})

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get("/name", (request, response) => {
    response.json({ name : request.query.first + " " + request.query.last})
})
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;