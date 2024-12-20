import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData();

    

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
                                onChange={handleStatusUpdate}
                                className="select select-bordered select-sm w-full max-w-sm"
                            >
                                <option disabled>Select Status</option>
                                <option value="Under Review">
                                    Under Review
                                </option>
                                <option value="Set Interview">
                                    Set Interview
                                </option>
                                <option value="Under Review">
                                    Under Review
                                </option>
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
