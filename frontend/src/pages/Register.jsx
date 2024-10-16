import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BookOpenIcon, ShieldIcon, UserIcon } from "lucide-react";
import axiosInstance from "../helpers/axiosConfig";

export default function Register() {
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
      const response = await axiosInstance.post(
        "user/register",
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
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-2">Create your account</h2>
          <p className="text-gray-600 mb-8">
            Get Started now!, Please enter your details.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Fullname*
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
                Email*
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
                Password*
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
                Select your role:
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
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 font-semibold text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Accept terms and conditions*
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"} className="text-violet-600 hover:underline">
              login here.
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 bg-gray-200 relative overflow-hidden">
        <img
          src="/register-banner.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-12 text-white">
          <div className="max-w-md">
            <p className="text-2xl font-bold mb-4">
              Our college management system streamlines operations and
              accelerates administrative tasks.
            </p>
            <p className="text-lg font-bold mb-4">
              While others struggle with inefficiencies, we're delivering new
              features that enhance student and faculty experiences.
            </p>
            <p className="font-semibold">Rhugved Chavan</p>
            <p className="text-sm">Principal, Lords</p>
            <p className="text-sm">Education and Administration</p>
          </div>

          <div className="flex items-center mt-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
