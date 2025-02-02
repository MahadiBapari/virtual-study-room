const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [{ user: String, text: String, timestamp: Date }],
});

module.exports = mongoose.model("Room", RoomSchema);