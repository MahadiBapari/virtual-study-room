const express = require("express");
const auth = require("../middleware/authMiddleware");
const RoomController = require("../controllers/roomController");


const router = express.Router();

router.post("/create", auth, RoomController.createRoom);
router.post("/join/:roomId", auth, RoomController.joinRoom);

module.exports = router;