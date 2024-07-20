import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Workflow from "./components/Workflow";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ContactLyout from "./components/ContactLyout";
import Projects from "./components/Projects";
import About from "./components/About";


const router = createBrowserRouter([

  {
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [

      {
        path: "/workflow",
        element: <Workflow />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactLyout />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
    
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);