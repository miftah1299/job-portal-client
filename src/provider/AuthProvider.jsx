import AuthContext from "../context/AuthContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signinWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };

                axios
                    .post("https://jobportal-server-side.vercel.app/jwt", user, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log("login", res.data);
                        setLoading(false);
                    });
            } else {
                axios
                    .post(
                        "https://jobportal-server-side.vercel.app/logout",
                        {},
                        { withCredentials: true }
                    )
                    .then((res) => {
                        console.log("logout", res.data);
                        setLoading(false);
                    })
                    .catch((error) => console.log(error));
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signinUser,
        signinWithGoogle,
        signoutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
