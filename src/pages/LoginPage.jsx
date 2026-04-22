import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { styles } from "../css/login.js";
import { useDispatch } from "react-redux";
import { login, setLoading } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { setExistingDetails } from "../store/slices/communitySlice";
import { useSelector } from "react-redux";
import { API_URL } from '../config';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const { user, isLoggedIn, isLoading } = useSelector((state) => state.auth);
    async function handleLogin() {
        setEmailError("");
        setPasswordError("");
        setGeneralError("");


        let hasError = false;

        if (!email) {
            setEmailError("Email is required");
            hasError = true;
        }

        if (!password) {
            setPasswordError("Password is required");
            hasError = true;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            hasError = true;
        }

        if (hasError) return;

        try {
            dispatch(setLoading(true));
            const res = await axios.post(
                `${API_URL}/api/user/login`,
                { email, password },
                { withCredentials: true }
            );
            console.log("LOGIN RESPONSE:", res.data);

            if (res.data.error) {
                setGeneralError(
                    res.data.error.info || res.data.error.message
                );
                return;
            }

            dispatch(login({ user: res.data.data.user }));

            dispatch(setExistingDetails({
                joinedCommunities: res.data.data.joinedCommunities,
                hostedCommunities: res.data.data.hostedCommunities,
            }));
            navigate("/");
        } catch (error) {
            console.log(error);
            setGeneralError("Something went wrong");
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div className={styles.page}>

            <div className={styles.blur}></div>

            <div className={styles.container}>

                <div className={styles.left}>

                    <h1 className={styles.title}>
                        Welcome back to <br />
                        <span className={styles.highlight}>MeetNest</span>
                    </h1>

                    <p className={styles.desc}>
                        Manage events, grow communities, and connect with people.
                    </p>

                    <div className={styles.list}>
                        {[
                            "Discover communities you love",
                            "Host and manage events easily",
                            "Build meaningful connections",
                        ].map((item, i) => (
                            <div key={i} className={styles.listItem}>
                                <span className={styles.tick}>✓</span>
                                {item}
                            </div>
                        ))}
                    </div>

                </div>

                <div className={styles.right}>

                    <div className={styles.formBox}>

                        <h2 className={styles.formTitle}>
                            Welcome Back
                        </h2>

                        <p className={styles.formSubtitle}>
                            Login to continue your journey
                        </p>

                        <div className="space-y-5">

                            <div>
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter registered email"
                                    className={styles.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                {emailError && (
                                    <span className={styles.errorTextField}>
                                        {emailError}
                                    </span>
                                )}
                            </div>


                            <div>
                                <label className={styles.label}>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter correct password"
                                    className={styles.input}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {passwordError && (
                                    <span className={styles.errorTextField}>
                                        {passwordError}
                                    </span>
                                )}
                            </div>

                            <div className={styles.forgot}>
                                <button
                                    onClick={() =>
                                        navigate("/forgot-password", {
                                            state: { fromLogin: true }
                                        })
                                    }
                                    className={styles.link}
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <button
                                disabled={isLoading}
                                onClick={handleLogin}
                                className={styles.button}
                            >
                                {isLoading ? "Logging in..." : "Login"}
                            </button>
                            {generalError && (
                                <span className={styles.errorTextGeneral}>
                                    {generalError}
                                </span>
                            )}
                        </div>

                        <p className={styles.footer}>
                            Don’t have an account?{" "}
                            <Link to="/register" className={styles.link}>
                                Register
                            </Link>
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default LoginPage;