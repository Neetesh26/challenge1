import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white  rounded-xl shadow-md p-6 w-64 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
          className="w-20 h-20 rounded-full border-2 border-indigo-500"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-center mb-2">{user.name}</h2>

      {/* Rating */}
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < user.rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* View Profile Button */}
      <div className="flex justify-center">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
