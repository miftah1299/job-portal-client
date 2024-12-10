import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Outlet />
        </div>
    );
};

export default MainLayout;