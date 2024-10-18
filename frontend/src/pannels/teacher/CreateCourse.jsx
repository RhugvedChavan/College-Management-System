import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../helpers/axiosConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const CreateCourses = () => {
  const { user } = useSelector((state) => state.auth);
  const teacherId = user.id;

  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    description: "",
    startDate: "",
    endDate: "",
    teacherId: teacherId,
  });
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `teacher/create-course`,
        courseData,
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate('/teacher/courses')
        toast.success(response.data.message)
      }
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error(error.message)
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create New Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={courseData.courseName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Course Code</label>
              <input
                type="text"
                name="courseCode"
                value={courseData.courseCode}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={courseData.startDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={courseData.endDate}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
             {loading ? (
                <span className="flex items-center justify-center gap-1">
                  {" "}
                  <Loader2 className="text-2xl font-bold text-neutral-800 animate-spin" />{" "}
                  Creating course..
                </span>
              ) : (
                "Create course"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourses;
