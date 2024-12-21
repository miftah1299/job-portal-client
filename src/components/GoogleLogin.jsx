import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleLogin = () => {
    const { signinWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        signinWithGoogle()
            .then(() => {
                toast("Signed in with Google");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex flex-col">
            <div className="divider">OR</div>

            <button
                onClick={handleGoogleSignin}
                className="btn btn-outline px-6 py-2 rounded-full"
            >
                <FcGoogle size={24} />
                Sign Up with Google
            </button>
        </div>
    );
};

export default GoogleLogin;
