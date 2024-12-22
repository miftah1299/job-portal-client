import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: "https://jobportal-server-side.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.log("Error in response interceptor", error);
                if (error.status === 401 || error.status === 403) {
                    signOutUser()
                        .then(() => {
                            console.log("User signed out");
                            navigate("/auth/signin");
                        })
                        .catch((error) => {
                            console.log("Error signing out user", error);
                        });
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return axiosInstance;
};

export default useAxiosSecure;
