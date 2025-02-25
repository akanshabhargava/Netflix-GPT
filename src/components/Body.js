import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Browse from "../pages/Browse";
import Login from "../pages/Login";

const Body = () => {
  //const dispatchFn = useDispatch();
  //const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
