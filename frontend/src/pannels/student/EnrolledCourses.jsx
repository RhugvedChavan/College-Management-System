import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const studentId = user.id;

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/student/enrolled-courses/${studentId}`,
          { withCredentials: true }
        );
        setEnrolledCourses(response.data);
      } catch (err) {
        setError("Failed to fetch enrolled courses");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchEnrolledCourses();
    }
  }, [studentId]);

  if (loading) {
    return <Loader2 className="animate-spin" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (enrolledCourses.length === 0) {
    return <p>No enrolled courses found.</p>;
  }

  return (
    <div className="enrolled-courses">
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course._id}>
            <h3>{course.courseName}</h3>
            <p>
              <strong>Course Code:</strong> {course.courseCode}
            </p>
            <p>
              <strong>Description:</strong> {course.description}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(course.startDate).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {new Date(course.endDate).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledCourses;
