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
import MyApplications from "../pages/Applications/MyApplications";
import AddJob from "../pages/Jobs/AddJob";
import MyPostedJobs from "../pages/Jobs/MyPostedJobs";
import ViewApplications from "../pages/Applications/ViewApplications";

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
                path: "jobs-apply/:id",
                element: (
                    <ProtectedRoute>
                        <JobApply />
                    </ProtectedRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },
            {
                path: "my-applications",
                element: (
                    <ProtectedRoute>
                        <MyApplications />
                    </ProtectedRoute>
                ),
                // loader: ({params}) =>
                //     fetch(`/job-applications/email=${user.email}/${params.id}`),
            },
            {
                path: "add-job",
                element: (
                    <ProtectedRoute>
                        <AddJob />
                    </ProtectedRoute>
                ),
            },
            {
                path: "my-posted-jobs",
                element: (
                    <ProtectedRoute>
                        <MyPostedJobs />
                    </ProtectedRoute>
                ),
            },
            {
                path: "view-applications/:job_id",
                element: (
                    <ProtectedRoute>
                        <ViewApplications />
                    </ProtectedRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/job-applications/jobs/${params.job_id}`
                    ),
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
