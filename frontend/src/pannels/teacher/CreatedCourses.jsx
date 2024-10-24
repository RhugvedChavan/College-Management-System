import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Users, BookOpen, Clock } from "lucide-react";

const CreatedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "http://localhost:8000/api/v1/teacher/all-courses",
          {
            withCredentials: true,
          }
        );

        if (response.data) {
          setCourses(response.data.course);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCourses();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Courses</h1>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 animate-pulse"
            >
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {course.courseName}
                  </h2>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {course.courseCode}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {course.description.slice(0, 60)}{" "}
                  <span className="text-violet-500 text-sm">Read more...</span>
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      {formatDate(course.startDate)} -{" "}
                      {formatDate(course.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>
                      {course.enrolledStudents.length} students enrolled
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>
                      {course.materials ? course.materials.length : 0} materials
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Created {formatDate(course.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No Courses Found
            </h2>
            <p className="text-gray-600">
              You haven't created any courses yet.
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default CreatedCourses;
