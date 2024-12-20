import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

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
