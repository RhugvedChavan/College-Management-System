import React from "react";
import {
  Bell,
  Book,
  Calendar,
  CheckSquare,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const TeacherDashboard = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Quick Stats
              </h2>
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">120</p>
              <p className="text-gray-600">Total Students</p>
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>4 Classes Today</span>
                <span>3 Pending Assignments</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Today's Classes
              </h2>
              <Calendar className="w-6 h-6 text-green-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-20 text-sm font-medium">9:00 AM</span>
                <span className="flex-grow">Math 101</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-20 text-sm font-medium">11:00 AM</span>
                <span className="flex-grow">Science 202</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-20 text-sm font-medium">2:00 PM</span>
                <span className="flex-grow">History 303</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-20 text-sm font-medium">4:00 PM</span>
                <span className="flex-grow">English 404</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Activities
              </h2>
              <Bell className="w-6 h-6 text-yellow-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-24 text-sm font-medium text-gray-500">
                  2 hours ago
                </span>
                <span className="flex-grow">Graded Math Quiz</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-24 text-sm font-medium text-gray-500">
                  Yesterday
                </span>
                <span className="flex-grow">Updated Science syllabus</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-24 text-sm font-medium text-gray-500">
                  2 days ago
                </span>
                <span className="flex-grow">Posted new assignment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                To-Do List
              </h2>
              <CheckSquare className="w-6 h-6 text-purple-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input type="checkbox" id="task1" className="mr-2" />
                <label htmlFor="task1" className="text-gray-700">
                  Prepare next week's lesson plan
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task2" className="mr-2" />
                <label htmlFor="task2" className="text-gray-700">
                  Grade History essays
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task3" className="mr-2" />
                <label htmlFor="task3" className="text-gray-700">
                  Schedule parent-teacher meetings
                </label>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Announcements
              </h2>
              <MessageSquare className="w-6 h-6 text-red-500" />
            </div>
            <ul className="space-y-2">
              <li className="bg-red-100 text-red-800 p-2 rounded">
                Staff meeting on Friday at 3 PM
              </li>
              <li className="bg-yellow-100 text-yellow-800 p-2 rounded">
                Science fair next week
              </li>
              <li className="bg-green-100 text-green-800 p-2 rounded">
                Report cards due by end of month
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Class Performance
              </h2>
              <Book className="w-6 h-6 text-indigo-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-gray-700">Math 101</span>
                <span className="text-green-600 font-semibold">85%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">Science 202</span>
                <span className="text-yellow-600 font-semibold">78%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">History 303</span>
                <span className="text-green-600 font-semibold">92%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">English 404</span>
                <span className="text-green-600 font-semibold">88%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
