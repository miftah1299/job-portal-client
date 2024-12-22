import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e, id) => {
        const data = {
            status: e.target.value,
        };
        fetch(`https://jobportal-server-side.vercel.app/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success("Status updated successfully");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
            {applications.length > 0 ? (
                <ul className="space-y-4">
                    {applications.map((application) => (
                        <li
                            key={application._id}
                            className="p-4 bg-white rounded-lg shadow space-y-2"
                        >
                            <h2 className="text-xl font-semibold">
                                {application.application_email}
                            </h2>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                {application.linkedin}
                            </p>
                            <p>
                                <strong>GitHub:</strong> {application.github}
                            </p>
                            <p>
                                <strong>Resume:</strong>{" "}
                                <a
                                    href={application.resume}
                                    target="_blank"
                                    rel="noopener noreferrer" // for security
                                >
                                    View Resume
                                </a>
                            </p>
                            <p>
                                <strong>Cover Letter:</strong>{" "}
                                {application.coverLetter}
                            </p>

                            {/* update status */}
                            <select
                                defaultValue={
                                    application.status || "Update Status"
                                }
                                onChange={(e) =>
                                    handleStatusUpdate(e, application._id)
                                }
                                className="select select-bordered select-sm w-full max-w-sm"
                            >
                                <option disabled>Select Status</option>
                                <option value="Under Review">
                                    Under Review
                                </option>
                                <option value="Set Interview">
                                    Set Interview
                                </option>
                                <option value="Hired">Hired</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No applications found.</p>
            )}
        </div>
    );
};

export default ViewApplications;
