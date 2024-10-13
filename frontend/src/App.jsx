import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { loadState } from "./helpers/localstorage";
import { setUser } from "./redux/userSlice";
import Student from "./pannels/student/student";
import Teacher from "./pannels/teacher/teacher";
import Admin from "./pannels/admin/Admin";
import CreateUsers from "./pannels/admin/CreateUsers";
import AllTeachers from "./pannels/admin/AllTeachers";
import AllStudents from "./pannels/admin/AllStudents";

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
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
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
    ],
  },
  {
    path: "/teacher",
    element: <Teacher />,
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
