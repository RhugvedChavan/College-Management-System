import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../redux/userSlice";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/login" },
  { name: "Features", path: "/login" },
  { name: "Adminstration", path: "/login" },
  { name: "Contact Us", path: "/login" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dashboard = user?.role ? user.role : "/";

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/logout",
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
      <div className="flex items-center justify-center gap-2">
        <GraduationCap className="h-9 w-9 text-violet-500" />
        <h1 className="text-2xl font-bold text-violet-500">EduRac</h1>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-6">
          {navLinks.map((items, _) => (
            <Link key={items.name} to={`${items.path}`}>
              <li className="text-neutral-700 font-semibold">{items.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <div className="">
          {isAuthenticated ? (
            <div className="flex items-center justify-center gap-7">
              <Link to={`/${dashboard}`}>
                <button className="px-3 py-1.5 flex items-center justify-center gap-1 text-white font-semibold bg-violet-500 hover:bg-violet-400 transition-all duration-200 rounded-md outline-none">
                  Dashboard <ArrowRight />
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 flex items-center justify-center gap-1 text-black font-semibold border border-violet-500 rounded-md outline-none"
              >
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-7">
              <Link to={"/login"}>
                <button className="px-3 py-1 flex items-center justify-center gap-1 text-black font-semibold border border-violet-500 rounded-md outline-none">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="px-3 py-1 flex items-center justify-center gap-1 text-white font-semibold bg-violet-500 hover:bg-violet-400 transition-all duration-200 rounded-md outline-none">
                  Register <ArrowRight />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
