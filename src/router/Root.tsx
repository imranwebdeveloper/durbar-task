import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import DashboardLayout from "./DashboardLayout";
import MainLayoutOne from "../page/MainLayoutOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/main-layout",
        element: <MainLayoutOne />,
      },
    ],
  },
]);

export default router;
