import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/AuthSlice";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
    alert("user logged out");
  };

  return (
    <div className="h-screen w-full flex bg-gray-100">
      {/* Sidebar */}
      <nav className="w-[20%] bg-white border-r shadow-md p-6 flex flex-col">
        <h1 className="text-3xl font-bold text-indigo-600 mb-10">
          Ecom Admin
        </h1>

        <div className="flex flex-col gap-4 flex-1">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/home/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/home/users"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`
            }
          >
            Users
          </NavLink>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600 transition"
        >
          Log out
        </button>
      </nav>

      {/* Main Content */}
      <main className="w-[80%] p-6 overflow-y-auto">
        <div className="bg-white rounded-xl shadow p-6 min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
