const Room = require("../models/roomModel");
const upload = require("../middleware/upload");

class RoomController {
    
    // Create a study room
    static async createRoom(req, res) {
        const { name } = req.body;
        try {
            const room = new Room({ name, users: [req.user] });
            await room.save();
            res.status(201).json({ message: "Room created successfully", room });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    // Join a study room
    static async joinRoom(req, res) {
        try {
            const room = await Room.findById(req.params.roomId);
            if (!room) return res.status(404).json({ error: "Room not found" });

            if (!room.users.includes(req.user)) {
                room.users.push(req.user);
                await room.save();
            }

            res.json({ message: "Joined the room successfully", room });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    //Upload file in the study room
    static async uploadFile(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            res.json({ filePath: `/uploads/${req.file.filename}` });

        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = RoomController; 
