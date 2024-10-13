import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ toggleSidebar }) => {
  const { user } = useSelector((store) => store.auth);
  const fullname = user.fullname;
  const currentDate = new Date();
  const date = currentDate.getDate();
  const monthIndex = currentDate.getMonth().toString();
  const year = currentDate.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[monthIndex];

  return (
    <header className="bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
          >
            <FaBars className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-neutral-700">
              Welcome Back, {fullname}
            </h1>
            <p className="text-sm font-semibold text-neutral-500 pt-1">
              {date}, {month}, {year}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="flex items-center">
            <FaUser className="h-6 w-6 text-gray-500 mr-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
