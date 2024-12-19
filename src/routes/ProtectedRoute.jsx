import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const location = useLocation();

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/signin" />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
