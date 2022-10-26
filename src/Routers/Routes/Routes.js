import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Courses from '../../Pages/Courses/Courses';
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://code-sarver.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://code-sarver.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivetRoute>
            <Courses></Courses>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://code-sarver.vercel.app/courses/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
