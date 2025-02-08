import React, { useState } from "react";
import { uploadFile } from "../services/api";

const Room = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");
    await uploadFile(formData, token);
    alert("File uploaded successfully!");
  };

  return (
    <div>
      <h2>Study Room</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default Room;
