import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyPostedJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    console.log(jobs);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error("Error:", error));
    }, [user.email]);

    const handleDeleteJob = (id) => {
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
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your job has been deleted.",
                                "success"
                            );
                            setJobs(jobs.filter((job) => job._id !== id));
                        }
                    })
                    .catch((error) => console.error("Error:", error));
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">My Posted Jobs</h1>
            {jobs.length > 0 ? (
                <ul className="space-y-4">
                    {jobs.map((job) => (
                        <li
                            key={job._id}
                            className="p-4 bg-white rounded-lg shadow"
                        >
                            <h2 className="text-xl font-semibold">
                                {job.title}
                            </h2>
                            <p>
                                <strong>Company:</strong> {job.company}
                            </p>
                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>
                            <p>
                                <strong>Status:</strong> {job.status}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <Link
                                    to={`/jobs/${job._id}`}
                                    className="btn bg-primaryLight text-white"
                                >
                                    View Details
                                </Link>
                                <button
                                    onClick={() => handleDeleteJob(job._id)}
                                    className="text-accent"
                                >
                                    <RiDeleteBin6Line size={24} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs posted.</p>
            )}

            <div className="mt-4">
                <Link to="/add-job" className="btn bg-primaryLight text-white">
                    Add Job
                </Link>
            </div>
        </div>
    );
};

export default MyPostedJobs;