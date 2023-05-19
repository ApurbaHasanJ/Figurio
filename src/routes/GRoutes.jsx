import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ToysDetails from "../pages/ToysDetails/ToysDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: `/categories/:categoryId/toys/:toyId`,
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
