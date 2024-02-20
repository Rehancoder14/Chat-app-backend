const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  icon: {
    type: String,
    required: false
  },
  isGroup: {
    required: true,
    type: Boolean,
  },
  lastMessage: {
    type: String,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
