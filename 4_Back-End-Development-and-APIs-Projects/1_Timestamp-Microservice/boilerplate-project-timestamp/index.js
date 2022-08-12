// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
/*
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
*/
app.get("/api/", (request, response) => {
  let date = new Date(Date.now());
  response.json({"unix": date.getTime(), "utc":date.toUTCString()})
})

/*
app.get("/api/:date_string", (request, response) => {
  let input = request.params.date_string;
  let responseObject = {};
  console.log(input)
  if(input.match(/^([0-9]+)-([0-9]+)-([0-9]+)$/))
  {
    console.log("case 1 : " + input)
    let date = new Date(input);
    responseObject = {"unix": date.getTime(), "utc":date.toUTCString()};
  }
  else if(input.match(/^([0-9]+)$/))
  {
    console.log("case 2 : " + input)
    let date = new Date(parseInt(input));
    responseObject["unix"] = date.getTime();
    responseObject["utc"] = date.toUTCString();
  }
  else
  {
    console.log("case 3 : " + input)
    let date = new Date(input);
    responseObject["unix"] = date.getTime();
    responseObject["utc"] = date.toUTCString();
  }

  if(!responseObject["unix"] || !responseObject["utc"])
  {
    response.json({error: 'Invalid Date'})
  }
  response.json(responseObject)

})
*/


app.get("/api/:date_string", (request, response) => {
  let input = request.params.date_string;
  let responseObject = {};
  let date;
  console.log(input)

  if(input.match(/^([0-9]+)$/))
  {
    console.log("case 1 : " + input)
    date = new Date(parseInt(input));
  }
  else
  {
    console.log("case 2 : " + input)
    date = new Date(input);

  }

  responseObject["unix"] = date.getTime();
  responseObject["utc"] = date.toUTCString();

  if(!responseObject["unix"] || !responseObject["utc"])
  {
    response.json({error: 'Invalid Date'})
  }
  response.json(responseObject)

})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
