import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "../Private/PrivateRoute";
import RouteError from "../Components/RouteError";
import UpdateProfile from "../Pages/UpdateProfile";
import ResetPassword from "../Pages/ResetPassword";

export const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <RouteError></RouteError>,
  // },
  {
    path: "/",
    Component: MainLayout,
    errorElement: <RouteError></RouteError>,
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
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/updateProfile",
        Component: UpdateProfile,
      },
      {
        path: "/resetPassword",
        Component: ResetPassword,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
