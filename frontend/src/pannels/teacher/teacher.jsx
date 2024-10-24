import { useState } from "react";
import Header from "../dashboard/Header";
import { FaHome, FaBook,} from "react-icons/fa";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const menuItems = [
  {
    icon: <FaHome className="mr-4" />,
    text: "Dashboard",
    id: "dashboard",
    path: "/teacher/my-dashboard",
  },
  {
    icon: <FaBook className="mr-4" />,
    text: "Create courses",
    id: "courses",
    path: "/teacher/create-course",
  },
  {
    icon: <FaBook className="mr-4" />,
    text: "Courses",
    id: "created courses",
    path: "/teacher/courses",
  },
];

const Teacher = () => {
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
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Teacher;
