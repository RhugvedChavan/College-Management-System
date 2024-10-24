import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { loadState } from "./helpers/localstorage";
import { setUser } from "./redux/userSlice";
import Teacher from "./pannels/teacher/teacher";
import Admin from "./pannels/admin/Admin";
import CreateUsers from "./pannels/admin/CreateUsers";
import AllTeachers from "./pannels/admin/AllTeachers";
import AllStudents from "./pannels/admin/AllStudents";
import PostNotice from "./pannels/admin/PostNotice";
import MainDashboard from "./pannels/admin/MainDashboard";
import CreateCourse from "./pannels/teacher/CreateCourse";
import TeacherDashboard from "./pannels/teacher/TeacherDashboard";
import StudentDashboard from "./pannels/student/StudentDashboard";
import Student from "./pannels/student/Student";
import CreatedCourses from "./pannels/teacher/CreatedCourses";
import AllCourses from "./pannels/student/AllCourses";
import CourseDetail from "./pannels/student/CourseDetail";
import EnrolledCourses from "./pannels/student/EnrolledCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/student",
    element: <Student />,
    children: [
      {
        path: "my-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "courses",
        element: <AllCourses />,
      },
      {
        path: "course-details/:courseId",
        element: <CourseDetail />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "my-dashboard",
        element: <MainDashboard />,
      },
      {
        path: "create-users",
        element: <CreateUsers />,
      },
      {
        path: "teachers",
        element: <AllTeachers />,
      },
      {
        path: "students",
        element: <AllStudents />,
      },
      {
        path: "post-notices",
        element: <PostNotice />,
      },
    ],
  },
  {
    path: "/teacher",
    element: <Teacher />,
    children: [
      {
        path: "my-dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        path: "courses",
        element: <CreatedCourses />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedState = loadState();
    if (persistedState?.auth?.user) {
      dispatch(setUser(persistedState.auth.user));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
