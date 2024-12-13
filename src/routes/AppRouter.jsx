import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register";
import Signin from "../pages/Auth/Signin";
import Jobdetails from "../pages/Jobs/Jobdetails";
import ProtectedRoute from "./ProtectedRoute";
import JobApply from "../pages/Jobs/JobApply";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "jobs/:id",
                element: (
                    <ProtectedRoute>
                        <Jobdetails />
                    </ProtectedRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },
            {
                path: "/jobs/apply/:id",
                element: (
                    <ProtectedRoute>
                        <JobApply />
                    </ProtectedRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "signin",
                element: <Signin />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default AppRouter;
