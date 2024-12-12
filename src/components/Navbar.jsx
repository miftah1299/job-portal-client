import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link to="/" className="btn btn-ghost">
                    Home
                </Link>
                <Link to="/about" className="btn btn-ghost">
                    About
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                    Contact
                </Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-background">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-2xl text-textPrimary font-bold">
                    JobPortal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link
                    to="/auth/register"
                    className="btn btn-outline text-primary"
                >
                    Register
                </Link>
                <Link to="/auth/signin" className="btn btn-outline text-primary">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
