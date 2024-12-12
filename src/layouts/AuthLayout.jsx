import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
    return (
        <div>
            <Navbar />

            <Outlet />

            <Toaster />
        </div>
    );
};

export default AuthLayout;
