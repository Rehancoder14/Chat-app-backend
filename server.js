const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

var server = http.createServer(app);

var io  = require('socket.io')(server,{
    cors: {
        origin: '*',
    }
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false },),);

io.on('connection',()=>{
    console.log('connected');
});


server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});