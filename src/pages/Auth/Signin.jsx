import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Lottie from "lottie-react";
import signinAnimation from "../../assets/lottie/signin.json";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
    const handleSignin = (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;

        // console.log(email, password);
    };


    return (
        <div className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center">
            <div className="lg:w-1/3">
                <Lottie animationData={signinAnimation}></Lottie>
            </div>

            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form onSubmit={handleSignin} className="card-body">
                    <div className="form-control">
                        <h3 className="text-2xl text-textPrimary font-semibold text-center pb-4">
                            Sign In Now!
                        </h3>

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
                        <div className="absolute inset-y-14 right-0 pr-3 flex items-center cursor-pointer"
                        // onClick={togglePasswordVisibility}
                        ></div>
                    </div>

                    <div className="form-control mt-6 space-y-2">
                        <button className="btn btn-outline bg-secondary px-6 py-2 rounded-full">
                            Sign In
                        </button>

                        {/* sign up with google */}
                        <button
                            className="btn btn-outline px-6 py-2 rounded-full"
                        >
                            <FcGoogle size={24} />
                            Sign In with Google
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/register"
                        className="text-primary font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signin;