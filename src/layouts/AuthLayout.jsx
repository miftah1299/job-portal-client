import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const AuthLayout = () => {
    return (
        <div>
            <Navbar />

            <Outlet />
        </div>
    );
};

export default AuthLayout;
