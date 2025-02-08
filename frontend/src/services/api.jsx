import axios from "axios";

const API_BASE_URL = "http://localhost:5200/api"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Register
export const registerUser = async (userData) => {
  return await api.post("/users/register", userData);
};

// Login
export const loginUser = async (userData) => {
  return await api.post("/users/login", userData);
};

// Get User's Rooms
export const getUserRooms = async (token) => {
  return await api.get("/rooms", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Create Room
export const createRoom = async (roomData, token) => {
  return await api.post("/rooms/create", roomData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Join Room
export const joinRoom = async (roomId, token) => {
    return await api.post(`/rooms/join/${roomId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

// File Upload
export const uploadFile = async (formData, token) => {
  return await api.post("/rooms/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export default api;