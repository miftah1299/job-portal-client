import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [applications, setApplications] = useState([]);
    // console.log(user);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        //* Using fetch
        // fetch(`https://jobportal-server-side.vercel.app/job-applications?email=${user.email}`)
        //     .then((res) => res.json())
        //     .then((data) => setApplications(data))
        //     .catch((error) => console.error("Error:", error));

        //* Using axios
        // axios
        //     .get(`https://jobportal-server-side.vercel.app/job-applications?email=${user.email}`, {
        //         withCredentials: true,
        //     })
        //     .then((res) => setApplications(res.data))
        //     .catch((error) => console.error("Error:", error));

        //* Using axios with custom hook
        axiosSecure
            .get(`/job-applications?email=${user.email}`)
            .then((res) => setApplications(res.data));
    }, [user.email, axiosSecure]);

    const handleDeleteApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/job-applications/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your application has been deleted.",
                                "success"
                            );
                            setApplications(
                                applications.filter(
                                    (application) => application._id !== id
                                )
                            );
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            }
        });
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
            <h1 className="text-2xl text-primaryLight font-bold mb-4">
                Applications: {applications.length}
            </h1>
            {applications.length > 0 ? (
                <ul className="space-y-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-lg text-primaryDark">
                                    <th>Company</th>
                                    <th>Job</th>
                                    <th>Job Type</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* row */}
                                {applications.map((application) => (
                                    <tr key={application._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={
                                                                application.company_logo
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {application.company}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {application.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {application.category}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                {application.title}
                                            </span>
                                        </td>
                                        <td>{application.jobType}</td>
                                        <th>
                                            <button
                                                onClick={
                                                    handleDeleteApplication
                                                }
                                                className="text-accent"
                                            >
                                                <RiDeleteBin6Line size={24} />
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ul>
            ) : (
                <h3 className="text-2xl text-primaryLight font-bold">
                    No applications found.
                </h3>
            )}
        </div>
    );
};

export default MyApplications;
