import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const JobApply = () => {
    const { title } = useLoaderData();
    const { id } = useParams();

    const handleJobApplication = (e) => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;
        // console.log({ linkedin, github, resume, coverLetter });

        const jobApplication = {
            job_id: id,
            application_email: UserActivation.email,
            linkedin,
            github,
            resume,
            coverLetter,
        };

        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobApplication),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Application submitted successfully");
                // form.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="py-20 bg-background">
            <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
                <h1 className="text-2xl text-primaryLight font-bold mb-4">
                    Apply for {title}
                </h1>
                <form onSubmit={handleJobApplication}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="linkedin"
                        >
                            LinkedIn URL
                        </label>
                        <input
                            type="url"
                            name="linkedin"
                            placeholder="LinkedIn URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="github"
                        >
                            Github URL
                        </label>
                        <input
                            type="url"
                            name="github"
                            placeholder="Github URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="resume"
                        >
                            Resume URL
                        </label>
                        <input
                            type="url"
                            name="resume"
                            placeholder="Resume URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="coverLetter"
                        >
                            Cover Letter
                        </label>
                        <textarea
                            name="coverLetter"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-primaryLight text-white w-full hover:bg-primaryDark"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;