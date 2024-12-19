import React from "react";
import { useLoaderData } from "react-router-dom";

const JobApply = () => {
    const { title } = useLoaderData();

    const handleJobApply = (e) => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;

        console.log({ linkedin, github, resume, coverLetter });
    };

    return (
        <div className="py-20 bg-background">
            <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
                <h1 className="text-2xl text-primaryLight font-bold mb-4">
                    Apply for {title}
                </h1>
                <form onSubmit={handleJobApply}>
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
