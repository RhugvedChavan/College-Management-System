import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadAssignments = () => {
  const [courses, setCourses] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ title: '', link: '' });
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '' });
  const [attendanceSheet, setAttendanceSheet] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/teacher-courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const uploadMaterial = async (courseId) => {
    try {
      await axios.post(`/api/upload-material/${courseId}`, newMaterial);
      setNewMaterial({ title: '', link: '' });
      fetchCourses();
    } catch (error) {
      console.error('Error uploading material:', error);
    }
  };

  const createAssignment = async (courseId) => {
    try {
      await axios.post(`/api/create-assignment/${courseId}`, newAssignment);
      setNewAssignment({ title: '', description: '', dueDate: '' });
      fetchCourses();
    } catch (error) {
      console.error('Error creating assignment:', error);
    }
  };

  const uploadAttendance = async (courseId) => {
    try {
      await axios.post(`/api/upload-attendance/${courseId}`, { attendanceRecords: attendanceSheet });
      setAttendanceSheet([]);
      fetchCourses();
    } catch (error) {
      console.error('Error uploading attendance:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      
      {courses.map(course => (
        <div key={course._id} className="mb-8 border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">{course.courseName}</h2>
          
          <div className="mb-4">
            <h3 className="font-bold">Upload Material</h3>
            <input 
              type="text" 
              placeholder="Title"
              value={newMaterial.title}
              onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
              className="mt-2 border p-2 w-full"
            />
            <input 
              type="text" 
              placeholder="Link"
              value={newMaterial.link}
              onChange={(e) => setNewMaterial({...newMaterial, link: e.target.value})}
              className="mt-2 border p-2 w-full"
            />
            <button 
              onClick={() => uploadMaterial(course._id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Upload Material
            </button>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold">Create Assignment</h3>
            <input 
              type="text" 
              placeholder="Title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
              className="mt-2 border p-2 w-full"
            />
            <textarea 
              placeholder="Description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
              className="mt-2 border p-2 w-full"
            ></textarea>
            <input 
              type="date" 
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
              className="mt-2 border p-2 w-full"
            />
            <button 
              onClick={() => createAssignment(course._id)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Create Assignment
            </button>
          </div>
          
          <div>
            <h3 className="font-bold">Upload Attendance</h3>
            {course.enrolledStudents.map(student => (
              <div key={student._id} className="flex items-center mt-2">
                <span>{student.name}</span>
                <select 
                  onChange={(e) => {
                    const newSheet = [...attendanceSheet];
                    const index = newSheet.findIndex(record => record.studentId === student._id);
                    if (index !== -1) {
                      newSheet[index].status = e.target.value;
                    } else {
                      newSheet.push({ studentId: student._id, status: e.target.value });
                    }
                    setAttendanceSheet(newSheet);
                  }}
                  className="ml-2 border p-2"
                >
                  <option value="">Select</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </div>
            ))}
            <button 
              onClick={() => uploadAttendance(course._id)}
              className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Upload Attendance
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadAssignments;