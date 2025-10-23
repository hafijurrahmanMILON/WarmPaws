import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/service",
        Component: Services,
      },
      {
        path: "/profile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "/serviceDetails/:id",
    element: <ServiceDetails></ServiceDetails>,
    loader: () => fetch("/services.json"),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);
