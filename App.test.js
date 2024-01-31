
import './index.css';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // eslint-disable-next-line no-unused-vars
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Addproduct from './component/Addproduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/login",
    element:( <Login />),
  },
  {
    path: "/signup",
    element:( <Signup />),
  },
  {
    path: "/add-product",
    element:( <Addproduct />),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
//reportwebvitals();