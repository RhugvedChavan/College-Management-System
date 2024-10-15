import React, { useState } from "react";
import { FaHome, FaBook, FaCalendar, FaChartBar, FaCog } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";

const menuItems = [
  {
    icon: <FaHome className="mr-4" />,
    text: "Dashboard",
    id: "dashboard",
    path: "/admin/dashboard",
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
    text: "Post Notices",
    id: "notifications",
    path: "/admin/post-notices",
  },
];

const Admin = () => {
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
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
