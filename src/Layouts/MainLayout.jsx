import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import { AuthContext } from "../Context/AuthContext";

const MainLayout = () => {
   const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
