import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BookOpenIcon, ShieldIcon, UserIcon } from "lucide-react";

const CreateUsers = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullname, email, password);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        {
          fullname,
          email,
          password,
          role,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto mb-5">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-neutral-500">
          Register Teachers And Students
        </h1>
      </div>
      <div className=" ">
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Enter user's fullname
            </label>
            <input
              type="text"
              id="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your fullname"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Enter user's email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-neutral-700 text-sm font-semibold mb-2"
            >
              Create a password for user
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-2 text-sm font-semibold text-neutral-700">
              Select user's roles
            </label>
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  className="sr-only peer"
                  checked={role === "student"}
                  onChange={() => setRole("student")}
                />
                <label
                  htmlFor="student"
                  className="flex flex-col items-center justify-center p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-violet-600 peer-checked:text-violet-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  <UserIcon className="w-6 h-6 mb-2" />
                  <span>Student</span>
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="teacher"
                  name="role"
                  value="teacher"
                  className="sr-only peer"
                  checked={role === "teacher"}
                  onChange={() => setRole("teacher")}
                />
                <label
                  htmlFor="teacher"
                  className="flex flex-col items-center justify-center p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-violet-600 peer-checked:text-violet-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  <BookOpenIcon className="w-6 h-6 mb-2" />
                  <span>Teacher</span>
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  className="sr-only peer"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                <label
                  htmlFor="admin"
                  className="flex flex-col items-center justify-center p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-violet-600 peer-checked:text-violet-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  <ShieldIcon className="w-6 h-6 mb-2" />
                  <span>Admin</span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
