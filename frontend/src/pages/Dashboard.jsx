import React, { useEffect, useState } from "react";
import { getUserRooms, createRoom } from "../services/api";

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
    <div>
      <h2>Dashboard</h2>
      <input type="text" placeholder="Room Name" onChange={(e) => setRoomName(e.target.value)} />
      <button onClick={handleCreateRoom}>Create Room</button>

      <h3>My Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
