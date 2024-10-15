import React, { useState } from "react";
import { FaHome, FaBook, FaCalendar, FaChartBar, FaCog } from "react-icons/fa";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const menuItems = [
  {
    icon: <FaHome className="mr-4" />,
    text: "Dashboard",
    id: "dashboard",
    path: "/admin/create-users",
  },
  {
    icon: <FaBook className="mr-4" />,
    text: "Registration",
    id: "registration",
    path: "/admin/create-users",
  },
  {
    icon: <FaCalendar className="mr-4" />,
    text: "Teachers",
    id: "teachers",
    path: "/admin/teachers",
  },
  {
    icon: <FaChartBar className="mr-4" />,
    text: "Students",
    id: "students",
    path: "/admin/students",
  },
  {
    icon: <FaCog className="mr-4" />,
    text: "Post notifications",
    id: "notifications",
  },
];

const Student = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleMenuClick = (item) => {
    setActiveItem(item);
    toggleSidebar(false);
  };

  return (
    <div className="flex h-screen bg-violet-50">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activeItem={activeItem}
        menuItems={menuItems}
      />
      <div className="flex flex-col flex-1 rounded-2xl bg-white">
        <div className="flex items-start">
          <div className="w-[70%]">
            <Header toggleSidebar={toggleSidebar} />
          </div>
          <div className="w-[30%] bg-red-200 border-l-2 h-screen">
            <h1>Profile</h1>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Student;
