import React from "react";

const JobCard = ({ job }) => {
    const {
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
    } = job;

    return (
        <div className="card w-96 h-96 bg-base-200 shadow-xl border rounded-lg">
            <div className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src={company_logo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">{company}</h2>
                            <p className="text-sm text-gray-500">{location}</p>
                        </div>
                    </div>
                    <div>
                        <span className="badge badge-success badge-sm">✔</span>
                    </div>
                </div>

                <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                        <span>📅 {jobType}</span>
                        <span>•</span>
                        <span>⏱ 4 minutes ago</span>
                    </p>

                    <p class="text-sm text-gray-600 mb-4">{description}</p>

                    <div class="flex gap-2 mb-4">
                        <span class="badge badge-outline">Adobe XD</span>
                        <span class="badge badge-outline">Figma</span>
                        <span class="badge badge-outline">Photoshop</span>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <p class="text-2xl font-bold text-blue-500">
                        $500<span class="text-base font-normal">/Hour</span>
                    </p>
                    <button class="btn btn-sm bg-gray-300 text-blue-500 rounded-lg">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
