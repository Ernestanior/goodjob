import React, {FC} from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import Home from "../pages/home";
import Idea from "@/pages/idea";
import Concept from "@/pages/concept";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/idea",
        element: <Idea/>,
      },
      {
        path: "/concept",
        element: <Concept/>,
      },

  ]);
  
const Router:FC = () => {
    return <div style={{}}>
            <RouterProvider router={router} />
        </div>
}

export default Router
