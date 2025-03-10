import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://YOUR_BACKEND_IP:5000/api/stats") // Replace with backend IP
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Twitter User Statistics</h1>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.user_id} has {user.followers} followers</p>
          <p>{user.user_id} has {user.followees} followees</p>
        </div>
      ))}
    </div>
  );
}

export default App;
