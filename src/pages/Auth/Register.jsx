import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";
import GoogleLogin from "../../components/GoogleLogin";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState({});
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleRegister = (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        const name = formData.name.value;
        const photo = formData.photoUrl.value;

        // validate password
        if (!passwordPattern.test(password)) {
            setError({
                password:
                    "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.",
            });
            return;
        }
        // console.log(email, password, name, photo);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("User created successfully");
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                // console.log(errorCode, errorMessage);
                setError({ ...error, general: errorMessage });
                toast.error(errorMessage);
            });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="lg:w-1/3">
                <Lottie animationData={registerAnimation}></Lottie>
            </div>

            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <h3 className="text-2xl text-accentDark font-semibold text-center pb-4">
                            Register Now!
                        </h3>
                        {/* name */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {error.name && (
                            <label className="label text-accent text-sm">
                                {error.name}
                            </label>
                        )}

                        {/* photo */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="url"
                            name="photoUrl"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                        {error.photoUrl && (
                            <label className="label text-accent text-sm">
                                {error.photoUrl}
                            </label>
                        )}
                        {/* email */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <div
                            className="absolute inset-y-14 right-0 pr-3 flex items-center cursor-pointer"
                            // onClick={togglePasswordVisibility}
                        ></div>
                        {error.password && (
                            <p className="text-accent text-sm mt-2">
                                {error.password}
                            </p>
                        )}
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn btn-outline bg-secondary px-6 py-2 rounded-full">
                            Register
                        </button>
                        {/* sign up with google */}
                        <GoogleLogin />
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/signin"
                        className="text-accent font-semibold hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
