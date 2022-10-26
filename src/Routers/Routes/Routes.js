import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagory from "../../Pages/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Course from '../../Pages/Course/Course';
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Catagory></Catagory>,
      },
     {
        path: "/course/:id",
        element: <Course></Course>,
      },
    ],
  },
]);
