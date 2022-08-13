var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

var app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", bodyParser.urlencoded({extended: true}) , (request, response) => {
  try {
        if(!request.files) {
            response.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = request.files.upfile;
            console.log(avatar)
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            //avatar.mv('./uploads/' + avatar.name);

            //send response
            /*
            not the expected response from fcc
            response.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    type: avatar.mimetype,
                    size: avatar.size
                }
            });
            */
            response.send({
                name: avatar.name,
                type: avatar.mimetype,
                size: avatar.size
            })
        }
  } catch (err) {
    console.log("y")
        response.status(500).send(err);
  }
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
