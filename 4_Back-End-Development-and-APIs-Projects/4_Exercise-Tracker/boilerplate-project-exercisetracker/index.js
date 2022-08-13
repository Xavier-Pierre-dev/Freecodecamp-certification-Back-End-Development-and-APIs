const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// connect to database
const mongoDB_URI = process.env['mongoDB_URI']
mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let exerciceSessionSchema = new mongoose.Schema({
  description : {type: String, required: true},
  duration : {type: Number, required: true},
  date: String
});

let userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  log: [exerciceSessionSchema]
});

let exerciceSession = mongoose.model('Session', exerciceSessionSchema);
let User = mongoose.model('User', userSchema);


app.post("/api/users", bodyParser.urlencoded({ extended: false }) , (request, response) =>{
  console.log(request.body)

  let newUser = new User({username: request.body.username})
  newUser.save((error, savedUser)=> {
    if(!error)
    {
      let responseObject = {}
      responseObject["username"] = savedUser.username;
      responseObject["_id"] = savedUser.id
      response.json(responseObject)
    }
    else
    {
      response.json({})
    }
  })
})

app.post("/api/users/:_id/exercises", bodyParser.urlencoded({ extended: false }) , (request, response) => {
  //console.log(request.body)
  //console.log(request.params["_id"])

  
  if(!request.body.date)
  {
    request.body.date = new Date().toISOString().substring(0, 10);
  }
  else
  {
    request.body.date = new Date(request.body.date).toISOString().substring(0, 10);
  }
  

  console.log(request.body.date);
  let newExerciceSession = new exerciceSession({
    description: request.body.description,
    duration: parseInt(request.body.duration),
    date: request.body.date
  })

  if(!newExerciceSession.date)
  {
    newExerciceSession.date = new Date().toISOString().substring(0, 10);
  }

  
  
  User.findByIdAndUpdate(
    request.params["_id"],
    {$push : {log: newExerciceSession}},
    {returnDocument : "after"},
    (error, updatedUser) => {
      if(!error)
      {
        let responseObject = {}
        responseObject['username'] = updatedUser.username;
        responseObject['description'] = newExerciceSession.description;
        responseObject['duration'] = newExerciceSession.duration;
        responseObject['date'] = new Date(newExerciceSession.date).toDateString();
        responseObject['_id'] = updatedUser["_id"];
        response.json(responseObject)
      }
      else
      {
        response.json({})
      }
    }
  )
  
})

app.get("/api/users/:_id/logs", (request, response) => {

  User.findById(request.params["_id"], (error, result) => {
    if(!error)
    {
      let responseObject = {}
      responseObject["_id"] = result["_id"]
      responseObject["username"] = result.username
      responseObject["count"] = result.log.length;
      responseObject["log"] = []

      

        
      let fromDate = new Date(0)
      let toDate = new Date()
        
      if(request.query.from){
        fromDate = new Date(request.query.from)
      }
        
      if(request.query.to){
          toDate = new Date(request.query.to)
      }
        
      fromDate = fromDate.getTime()
      toDate = toDate.getTime()
        

        
      
      if(request.query.from || request.query.to)
      {
        result.log.forEach((element) => {
          let sessionDate = new Date(element.date).getTime()
          if(sessionDate >= fromDate && sessionDate <= toDate)
          {
              let logElement = {}
              logElement["description"] = element.description
              logElement["duration"] = element.duration
              logElement["date"] = new Date(element.date).toDateString()
              responseObject["log"].push(logElement)
          }
        });
      }
      else
      {
        result.log.forEach((element) => {
              let logElement = {}
              logElement["description"] = element.description
              logElement["duration"] = element.duration
              logElement["date"] = new Date(element.date).toDateString()
              responseObject["log"].push(logElement)
        });
      }


      if(request.query.limit){
        responseObject["log"] = responseObject["log"].slice(0, request.query.limit)
      }

      response.json(responseObject)
    }
    else
    {
      response.json({})
    }
  })
})



app.get("/api/users", (request, response) => {

  User.find({}, (error, data) => {
    if(!error)
    {
      response.json(data)
    }
  })
  
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
