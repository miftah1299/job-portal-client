import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
    const { user } = useAuth();
    // console.log(user);
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        company_logo: "",
        location: "",
        jobType: "",
        category: "",
        applicationDeadline: "",
        salaryRange: {
            min: "",
            max: "",
            currency: "",
        },
        description: "",
        requirements: [],
        responsibilities: [],
        hr_name: user?.displayName || "anonymous@example.com",
        hr_email: user?.email || "Anonymous",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (
            name === "salaryMin" ||
            name === "salaryMax" ||
            name === "currency"
        ) {
            setFormData({
                ...formData,
                salaryRange: {
                    ...formData.salaryRange,
                    [name === "salaryMin"
                        ? "min"
                        : name === "salaryMax"
                        ? "max"
                        : "currency"]: value,
                },
            });
        } else if (name === "requirements" || name === "responsibilities") {
            setFormData({
                ...formData,
                [name]: value.split(",").map((item) => item.trim()),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Job posted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Post a New Job</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="title"
                    >
                        Job Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="input input-bordered w-full"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="company"
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="input input-bordered w-full"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="company_logo"
                    >
                        Company Logo URL
                    </label>
                    <input
                        type="url"
                        id="company_logo"
                        name="company_logo"
                        className="input input-bordered w-full"
                        value={formData.company_logo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="input input-bordered w-full"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="jobType"
                    >
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        name="jobType"
                        className="select select-bordered w-full"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Select Job Type
                        </option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="category"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="select select-bordered w-full"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        <option value="Development">Development</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="applicationDeadline"
                    >
                        Application Deadline
                    </label>
                    <input
                        type="date"
                        id="applicationDeadline"
                        name="applicationDeadline"
                        className="input input-bordered w-full"
                        value={formData.applicationDeadline}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="salaryMin"
                        >
                            Minimum Salary
                        </label>
                        <input
                            type="number"
                            id="salaryMin"
                            name="salaryMin"
                            className="input input-bordered w-full"
                            value={formData.salaryRange.min}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="salaryMax"
                        >
                            Maximum Salary
                        </label>
                        <input
                            type="number"
                            id="salaryMax"
                            name="salaryMax"
                            className="input input-bordered w-full"
                            value={formData.salaryRange.max}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-2"
                            htmlFor="currency"
                        >
                            Currency
                        </label>
                        <select
                            id="jobType"
                            name="jobType"
                            className="select select-bordered w-full"
                            value={formData.jobType}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select Currency
                            </option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="BDT">BDT</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="AUD">AUD</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="description"
                    >
                        Job Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="textarea textarea-bordered w-full"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="requirements"
                    >
                        Requirements
                    </label>
                    <textarea
                        id="requirements"
                        name="requirements"
                        className="textarea textarea-bordered w-full"
                        placeholder="Comma separated values"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="responsibilities"
                    >
                        Responsibilities
                    </label>
                    <textarea
                        id="responsibilities"
                        name="responsibilities"
                        className="textarea textarea-bordered w-full"
                        placeholder="Comma separated values"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="hr_name"
                    >
                        HR Name
                    </label>
                    <input
                        type="text"
                        id="hr_name"
                        name="hr_name"
                        className="input input-bordered w-full bg-gray-100"
                        value={user?.displayName || ""}
                        // value={formData.hr_name}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="hr_email"
                    >
                        HR Email
                    </label>
                    <input
                        type="email"
                        id="hr_email"
                        name="hr_email"
                        className="input input-bordered w-full bg-gray-100"
                        value={user?.email || ""}
                        // value={formData.hr_email}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <button
                    type="submit"
                    className="btn bg-primaryLight text-white w-full hover:bg-primaryDark"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
