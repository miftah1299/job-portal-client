import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div>
            <Navbar />

            <Outlet />

            <Footer />

            <Toaster />
        </div>
    );
};

export default AuthLayout;
