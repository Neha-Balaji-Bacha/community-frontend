// components/ProtectedResetRoute.jsx
import { useParams, Navigate } from "react-router-dom";

function ProtectedResetRoute({ children }) {
    const { token } = useParams();

    // basic validation
    if (!token || token.length < 20) {
        return <Navigate to="/forgot-password" replace />;
    }

    return children;
}

export default ProtectedResetRoute;