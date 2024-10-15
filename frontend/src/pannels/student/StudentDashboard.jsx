import React from "react";

// Mock data
const courses = [
  { id: 1, name: "Mathematics", progress: 75, grade: "A-" },
  { id: 2, name: "Science", progress: 60, grade: "B+" },
  { id: 3, name: "History", progress: 90, grade: "A" },
  { id: 4, name: "English", progress: 85, grade: "A-" },
];

const assignments = [
  {
    id: 1,
    title: "Math Problem Set",
    course: "Mathematics",
    dueDate: "2023-05-20",
    status: "Pending",
  },
  {
    id: 2,
    title: "Science Lab Report",
    course: "Science",
    dueDate: "2023-05-18",
    status: "Submitted",
  },
  {
    id: 3,
    title: "History Essay",
    course: "History",
    dueDate: "2023-05-25",
    status: "In Progress",
  },
  {
    id: 4,
    title: "English Book Review",
    course: "English",
    dueDate: "2023-05-22",
    status: "Not Started",
  },
];

const announcements = [
  { id: 1, title: "Upcoming Science Fair", date: "2023-05-30" },
  { id: 2, title: "Math Quiz Next Week", date: "2023-05-25" },
  { id: 3, title: "School Holiday", date: "2023-06-01" },
];

const StudentDashboard = () => {
  const renderProgressBar = (progress) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen px-6 py-6 flex flex-col justify-center sm:py-12">
      <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Progress */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{course.name}</span>
                    <span className="text-sm font-medium">
                      {course.progress}%
                    </span>
                  </div>
                  {renderProgressBar(course.progress)}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Upcoming Assignments</h3>
            <ul className="space-y-2">
              {assignments.slice(0, 3).map((assignment) => (
                <li
                  key={assignment.id}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm">{assignment.title}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {assignment.dueDate}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All Courses */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">My Courses</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* All Assignments */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">All Assignments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {assignment.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {assignment.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {assignment.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${
                                  assignment.status === "Submitted"
                                    ? "bg-green-100 text-green-800"
                                    : assignment.status === "Pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : assignment.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                      >
                        {assignment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Announcements */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Announcements</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-2">
              {announcements.map((announcement) => (
                <li
                  key={announcement.id}
                  className="flex justify-between items-center"
                >
                  <span className="text-sm">{announcement.title}</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {announcement.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
