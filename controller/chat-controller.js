const asyncHandler = require('express-async-handler'); 

const uuid = require('uuid');
const ChatModel = require('../schema/chat-schema');

const getChatList = asyncHandler(async(req, res)=>{
    const chatList = await ChatModel.find();
   return  res.status(200).json({
        error: false, 
        message: "Data Fetched Successfully", 
        data: chatList
    });

});


const createChat = asyncHandler(async(req, res)=>{
    const {name, isGroup, lastMessage} = req.body;
    console.log(req.body);
    if( !name || !isGroup ){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const chat = await ChatModel.create({
        id: uuid.v4(),
        name,
        isGroup,
        lastMessage
    });
    
  return  res.status(201).json({
        error: false, 
        message: "Chat Created Successfully", 
        data: chat
    });
});


module.exports = {
    getChatList,
    createChat
};
