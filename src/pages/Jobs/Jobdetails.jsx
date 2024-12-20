import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobdetails = () => {
    const {
        _id,
        title,
        company,
        company_logo,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        requirements,
        responsibilities,
        status,
        hr_name,
        hr_email,
    } = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg space-y-2">
            <h1 className="text-3xl text-primaryDark font-bold mb-4">
                {title}
            </h1>
            <img
                className="w-24 h-24 mb-4"
                src={company_logo}
                alt={`${company} logo`}
            />
            <p>
                <strong>Company:</strong> {company}
            </p>
            <p>
                <strong>Location:</strong> {location}
            </p>
            <p>
                <strong>Job Type:</strong> {jobType}
            </p>
            <p>
                <strong>Category:</strong> {category}
            </p>
            <p>
                <strong>Application Deadline:</strong> {applicationDeadline}
            </p>
            <p>
                <strong>Salary Range:</strong> {salaryRange.min} -{" "}
                {salaryRange.max} {salaryRange.currency}
            </p>
            <p>
                <strong>Description:</strong> {description}
            </p>
            <p>
                <strong>Requirements:</strong>
            </p>
            <ul className="list-disc list-inside">
                {requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
            <p>
                <strong>Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            <p>
                <strong>Status:</strong> {status}
            </p>
            <p>
                <strong>HR Contact:</strong> {hr_name} ({hr_email})
            </p>

            <Link
                to={`/jobs-apply/${_id}`}
                className="btn btn-sm bg-gray-300 text-primaryLight rounded-lg"
            >
                Apply Now
            </Link>
        </div>
    );
};

export default Jobdetails;
