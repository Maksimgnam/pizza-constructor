
let host = '127.0.0.1';
let port =  8000;

let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser')





let app = express();

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.static(__dirname+'/public'))

app.get('/',function(rerequest,response){
    response.sendFile(__dirname+'/index.html')
})




app.listen(port, host);
console.log('server listen on port'+ port)