require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { Schema } = mongoose;

	const isValidUrl = urlString=> {
		let url;
		try { 
	      	url =new URL(urlString); 
	    }
	    catch(e){ 
	      return false; 
	    }
	    return url.protocol === "http:" || url.protocol === "https:";
	}


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

/* Database Connection */
const mongoDB_URI = process.env['mongoDB_URI'];
mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



let urlSchema = new Schema({
  original : {type: String, required: true},
  short: {type: Number, required: true}
})

let urlModel = mongoose.model('URL', urlSchema)



app.post("/api/shorturl", bodyParser.urlencoded({ extended: false }) , (request, response) => {
  let responseObject = {};
  let input = request.body["url"]
  responseObject["original_url"] = input;

  if(isValidUrl(responseObject["original_url"]))
  {
    let inputShort = 1;
    urlModel.findOne({ original: responseObject["original_url"] }, (error, result) => {
      if(error)
      {
        console.log(error)
      }
      else
      {
        if(result != undefined)
        {
          responseObject['short_url'] = result.short
          response.json(responseObject)
        }
        else
        {
          urlModel.findOne({}).sort({short: 'desc'}).exec((err, res) => {
            if(!err && res!=undefined)
            {
              inputShort = res.short + 1;
            }
            const dataUrl = new urlModel({
            original: responseObject["original_url"],
            short: inputShort
            });
            responseObject["short_url"]=inputShort;
            response.json(responseObject)
            dataUrl.save();

          })
        }
      }
    });
  }
  else
  {
    response.json({"error":"Invalid URL"})
  }

})

app.get("/api/shorturl/:input", (request, response) =>{
  let input = request.params.input

  urlModel.findOne({short: input}, (error, result) =>{
    if(!error && result!=undefined)
    {
      response.redirect(result.original);
    }
    else
    {
      response.json('URL not found');
    }
  })
  
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
