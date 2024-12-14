import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto bg-background py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default HotJobs;
