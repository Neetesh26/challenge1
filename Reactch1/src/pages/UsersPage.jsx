import React, { useState } from "react";
import { users } from "../data";
import UserCard from "../components/UserCard";

const UserPage = () => {
  const [Allusers, setAllusers] = useState(users);
  const [filter, setFilter] = useState("all");

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter users based on selected rating
  const filteredUsers = Allusers.filter((user) => {
    if (filter === "all") return true;
    if (filter === "5") return user.rating === 5;
    if (filter === "4") return user.rating >= 4;
    if (filter === "3") return user.rating >= 3;
    return true;
  });

  return (
    <div>
      {/* Footer Filter */}
      <footer style={{ marginTop: "20px" }}>
        <label htmlFor="rating-filter">Filter by Rating: </label>
        <select id="rating-filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="5">5 Stars</option>
        </select>
      </footer>

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>All Users</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {filteredUsers.map((user) => (
            <div
              key={user.id} // Use unique ID instead of index
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "fit-content",
                display: "flex",
              }}
            >
              {/* Pass the user prop to UserCard */}
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
