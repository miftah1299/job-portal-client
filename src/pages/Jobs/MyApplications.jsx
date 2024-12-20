import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setApplications(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
            <h1 className="text-2xl text-primaryLight font-bold mb-4">
                Applications: {applications.length}
            </h1>
            {applications.length > 0 ? (
                <ul className="space-y-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
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
                                            <button className="btn btn-ghost btn-xs">
                                                details
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
