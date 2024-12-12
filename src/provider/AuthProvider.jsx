import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        loading,
        createUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
