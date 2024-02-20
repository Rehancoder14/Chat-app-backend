const express = require('express');
const { getChatList, createChat } = require('../controller/chat-controller');
const router = express.Router();

router.get("/", getChatList);
router.post("/", createChat);

module.exports = router;

