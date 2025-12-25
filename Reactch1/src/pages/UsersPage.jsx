import React, { useState } from "react";
import { users } from "../data";
import UserCard from "../components/UserCard";

const UserPage = () => {
  const [Allusers] = useState(users);
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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Footer Filter */}
      <footer style={{ marginBottom: "20px" }}>
        <label htmlFor="rating-filter">Filter by Rating: </label>
        <select id="rating-filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
        </select>
      </footer>

      <h1 style={{ marginBottom: "20px" }}>All Users</h1>

      {/* User Cards Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping
          gap: "20px",      // Space between cards
        }}
      >
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              flex: "0 1 250px", // Card width and flex shrink/grow
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(UserPage);
