import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

// AOS.init({
//   duration: 1000, // animation কত সময় থাকবে
//   once: true, // scroll করে একবার দেখানোর পর আবার repeat করবে না
// });
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
