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
    path: "/student/my-dashboard",
  },
  {
    icon: <FaCalendar className="mr-4" />,
    text: "Courses",
    id: "courses",
    path: "/student/courses",
  },
  {
    icon: <FaCalendar className="mr-4" />,
    text: "Enrolled courses",
    id: "enrolled",
    path: "/student/enrolled-courses",
  },
  {
    icon: <FaChartBar className="mr-4" />,
    text: "Notifications",
    id: "notifications",
    path: "#",
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
        </div>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Student;
