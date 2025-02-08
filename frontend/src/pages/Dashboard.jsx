import React, { useEffect, useState } from "react";
import { getUserRooms, createRoom } from "../services/api";
import "../styles/Dashboard.css"

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      const token = localStorage.getItem("token");
      const res = await getUserRooms(token);
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  const handleCreateRoom = async () => {
    const token = localStorage.getItem("token");
    await createRoom({ name: roomName }, token);
    window.location.reload();
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="room-creation">
        <input 
          type="text" 
          placeholder="Room Name" 
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)} 
          className="room-input"
        />
        <button onClick={handleCreateRoom} className="create-room-btn">Create Room</button>
      </div>

      <h3 className="room-list-title">My Rooms</h3>
      <ul className="room-list">
        {rooms.map((room) => (
          <li key={room.id} className="room-item">{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
