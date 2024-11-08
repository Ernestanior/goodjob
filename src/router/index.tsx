import Home from "@/page/home";
import React, {FC} from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },


  ]);
  
const Router:FC = () => {
    return <div style={{}}>
            <RouterProvider router={router} />
        </div>
}

export default Router
