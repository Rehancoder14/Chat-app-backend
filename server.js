const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connectDb = require("./config/db");
const chatRouter = require("./routes/chat-routes");;
const errorHandler = require('./middleware/error-handler');
var server = http.createServer(app);

var io  = require('socket.io')(server,{
    cors: {
        origin: '*',
    }
});
connectDb();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
var clients = {};
io.on('connection',(socket)=>{
    console.log('connected');
    console.log(socket.id, "has joined");

    socket.on('signin',(id)=>{
       
        clients[id] = socket;
        console.log(clients);
        io.emit('signing data',id);
    });
    socket.on('message',(data)=>{
        console.log(data);
        let targetId = data.targetId;
        clients[targetId].emit('message', data)
    });
    // socket.on('disconnect',()=>{
    //     console.log(socket.id, "has left");
    // });
    });

app.use('/chat',chatRouter);
app.use(errorHandler);
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});