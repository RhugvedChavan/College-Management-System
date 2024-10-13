import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";

const Student = ({ children }) => {
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
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Student;
