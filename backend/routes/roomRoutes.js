const express = require("express");
const { protect } = require('../middleware/authMiddleware');
const RoomController = require("../controllers/roomController");
const multer = require("multer");


const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

router.post("/create", protect, RoomController.createRoom);
router.post("/join/:roomId", protect, RoomController.joinRoom);
router.post("/upload", protect, upload.single("file"), RoomController.uploadFile);



module.exports = router;