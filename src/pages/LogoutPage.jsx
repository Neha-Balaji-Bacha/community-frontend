import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";
import { useEffect } from "react";
import { API_URL } from '../config';

function LogoutPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        async function handleLogout() {
            try {
                await axios.post(
                    `${API_URL}/api/user/logout`,
                    {},
                    { withCredentials: true }
                );

                dispatch(logout());

                navigate("/login");

            } catch (error) {
                console.error("Logout failed", error);
            }
        }

        handleLogout();
    }, [dispatch, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600">Logging out...</p>
        </div>
    );
}

export default LogoutPage;