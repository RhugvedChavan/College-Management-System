import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const CourseDetail = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const studentId = user.id;
  const { courseId } = useParams();

  useEffect(() => {
    const getCourse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/v1/teacher/course-details/${courseId}`,
          { withCredentials: true }
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError("Failed to fetch course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      getCourse();
    }
  }, [courseId]);

  const enrollYouself = async (courseId, studentId) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/v1/student/enroll/${courseId}/${studentId}`,
        null,
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Enrollment failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-gray-600">
        Loading course details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-red-600">
        {error}
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-gray-600">
        No course found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" bg-violet-600 text-white p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {course.courseName || "Untitled Course"}
            </h1>
            <p className="text-xl mt-2 font-medium">
              Course Code: {course.courseCode || "N/A"}
            </p>
            <p className="py-1 font-medium">
              Enrolled Students: {course.enrolledStudents.length}
            </p>
          </div>
          <div>
            <button
              onClick={() => enrollYouself(courseId, studentId)}
              className="px-3 py-2 text-violet-500 font-medium bg-white rounded-md hover:bg-neutral-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="text-xl font-bold text-neutral-800 animate-spin" />{" "}
                  Enrolling please wait../
                </span>
              ) : (
                <span>Enroll yourself now</span>
              )}
            </button>
          </div>
        </div>

        <div className="p-6">
          <p>
            <span className="text-neutral-800 font-semibold">Description:</span>
          </p>
          <p className="text-gray-600 mb-6">
            {course.description || "No description available"}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold text-lg mb-2">Start Date</h2>
              <p>
                {course.startDate
                  ? new Date(course.startDate).toLocaleDateString()
                  : "Not set"}
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-semibold text-lg mb-2">End Date</h2>
              <p>
                {course.endDate
                  ? new Date(course.endDate).toLocaleDateString()
                  : "Not set"}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Assigned Teacher</h2>
            <p className="bg-gray-100 p-4 rounded">
              {course.teacher.fullname
                ? course.teacher.fullname
                : "Not assigned"}
            </p>
          </div>

          {/* <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Enrolled Students</h2>
            {course.enrolledStudents && course.enrolledStudents.length > 0 ? (
              <ul className="bg-gray-100 rounded p-4">
                {course.enrolledStudents.map((student, index) => (
                  <li key={index} className="mb-2 last:mb-0">
                    <span className="font-semibold">Student ID:</span>{" "}
                    {student.studentId},
                    <span className="font-semibold ml-2">Enrolled:</span>{" "}
                    {new Date(student.enrollmentDate).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bg-gray-100 p-4 rounded">No students enrolled</p>
            )}
          </div> */}

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Course Materials</h2>
            {course.materials && course.materials.length > 0 ? (
              <ul className="bg-gray-100 rounded p-4">
                {course.materials.map((material, index) => (
                  <li key={index} className="mb-2 last:mb-0">
                    <a
                      href={material.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {material.title}
                    </a>
                    <span className="text-gray-600 ml-2">
                      (Uploaded:{" "}
                      {new Date(material.uploadedAt).toLocaleDateString()})
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bg-gray-100 p-4 rounded">No materials available</p>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Assignments</h2>
            {course.assignments && course.assignments.length > 0 ? (
              <ul className="space-y-4">
                {course.assignments.map((assignment, index) => (
                  <li key={index} className="bg-gray-100 rounded p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {assignment.title}
                    </h3>
                    <p className="mb-2">{assignment.description}</p>
                    <p className="mb-1">
                      <span className="font-semibold">Due Date:</span>{" "}
                      {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Posted:</span>{" "}
                      {new Date(assignment.postedDate).toLocaleDateString()}
                    </p>
                    <h4 className="font-semibold mt-4 mb-2">Submissions</h4>
                    {assignment.submissions &&
                    assignment.submissions.length > 0 ? (
                      <ul className="pl-4">
                        {assignment.submissions.map((submission, subIndex) => (
                          <li key={subIndex} className="mb-1">
                            <span className="font-semibold">Student ID:</span>{" "}
                            {submission.studentId},
                            <span className="font-semibold ml-2">
                              Submitted:
                            </span>{" "}
                            {new Date(
                              submission.submittedAt
                            ).toLocaleDateString()}
                            ,<span className="font-semibold ml-2">Grade:</span>{" "}
                            {submission.grade || "Not graded"}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No submissions yet</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bg-gray-100 p-4 rounded">
                No assignments available
              </p>
            )}
          </div>

          {/* <div>
            <h2 className="text-2xl font-bold mb-4">Attendance Records</h2>
            {course.attendanceRecords && course.attendanceRecords.length > 0 ? (
              <ul className="bg-gray-100 rounded p-4">
                {course.attendanceRecords.map((record, index) => (
                  <li key={index} className="mb-2 last:mb-0">
                    <span className="font-semibold">Student ID:</span>{" "}
                    {record.studentId},
                    <span className="font-semibold ml-2">Date:</span>{" "}
                    {new Date(record.date).toLocaleDateString()},
                    <span className="font-semibold ml-2">Status:</span>{" "}
                    {record.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="bg-gray-100 p-4 rounded">
                No attendance records available
              </p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
