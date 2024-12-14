import React from "react";
import Banner from "../../components/Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Banner />

            <Outlet />
        </div>
    );
};

export default Home;
