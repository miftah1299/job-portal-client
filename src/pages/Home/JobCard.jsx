import React from "react";
import { GoClock } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { TfiBag } from "react-icons/tfi";

const JobCard = ({ job }) => {
    const {
        title,
        company,
        company_logo,
        location,
        jobType,
        applicationDeadline,
        salaryRange,
        description,
        requirements,
    } = job;

    return (
        <div className="card h-96 bg-base-200 shadow-lg border rounded-lg">
            <div className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src={company_logo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">{company}</h2>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                <GrLocation />
                                {location}
                            </p>
                        </div>
                    </div>
                    <div>
                        <span className="badge badge-success badge-sm">✔</span>
                    </div>
                </div>

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

                    <p class="text-sm text-gray-600">{description}</p>

                    <div class="flex flex-wrap gap-2">
                        {requirements.map((req) => (
                            <p class="badge badge-outline hover:text-primaryLight">
                                {req}
                            </p>
                        ))}
                    </div>
                </div>

                <div class="flex justify-between items-center gap-2">
                    <p class="font-medium text-primaryLight">
                        Salary: {salaryRange.min} - {salaryRange.max}{" "}
                        {salaryRange.currency}
                    </p>
                    <button class="btn btn-sm bg-gray-300 text-primaryLight rounded-lg">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
