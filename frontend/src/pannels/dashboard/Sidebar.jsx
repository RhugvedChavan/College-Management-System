import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = ({ isOpen, toggleSidebar, activeItem, menuItems }) => {
  const { user } = useSelector((state) => state.auth);
  const role = user.role;
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-violet-50 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className=" p-5 ">
        <Link to={"/"}>
          <span className="font-bold text-2xl text-violet-500">EduRac</span>
        </Link>
        <h1 className="text-lg font-semibold text-neutral-800">
          {role.toUpperCase()} Dashboard
        </h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center px-6 py-4 font-semibold text-neutral-500 hover:border-r-4 hover:border-violet-500 hover:text-neutral-700 ${
              activeItem === item.path ? " text-blue" : ""
            }`}
            onClick={() => toggleSidebar(false)}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
