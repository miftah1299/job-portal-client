import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://job-portal-server-site1.vercel.app/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                // console.log(data);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
