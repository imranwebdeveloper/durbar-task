import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import DashboardLayout from "./DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
