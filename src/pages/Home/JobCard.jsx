import PropTypes from "prop-types";
import React from "react";
import { GoClock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const {
        _id,
        title,
        company,
        company_logo,
        location,
        jobType,
        applicationDeadline,
        salaryRange = {},
        description,
        requirements,
    } = job;

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="card bg-base-200 shadow-lg border rounded-lg">
            <div className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src={company_logo} alt="logo" />
                            </div>
                        </div>
                        {/* Company Name and Location */}
                        <div>
                            <h2 className="font-semibold text-lg">{company}</h2>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                <GrLocation />
                                {truncateText(location, 5)}
                            </p>
                        </div>
                    </div>
                    <div>
                        <span className="badge badge-success badge-sm">✔️</span>
                    </div>
                </div>

                {/* Job Details */}
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-5">
                        <span className="flex gap-1 items-center">
                            <TfiBag />
                            {jobType}
                        </span>
                        <span className="flex gap-1 items-center">
                            <GoClock />
                            {applicationDeadline}
                        </span>
                    </p>

                    <p className="text-sm text-gray-600">
                        {truncateText(description, 15)}
                    </p>

                    {/* Requirements */}
                    <div className="flex flex-wrap gap-2 overflow-scroll">
                        {Array.isArray(requirements) &&
                            requirements.map((skill, index) => (
                                <p
                                    key={index}
                                    className="badge badge-outline hover:text-primaryLight"
                                >
                                    {skill}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Salary and Apply Button */}
                <div className="flex justify-between items-center gap-2">
                    <p className="text-sm text-primaryLight">
                        Salary: {salaryRange.min} - {salaryRange.max}{" "}
                        {salaryRange.currency}
                    </p>
                    <Link
                        to={`jobs/${_id}`}
                        className="btn btn-sm bg-gray-300 text-primaryLight rounded-lg"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
