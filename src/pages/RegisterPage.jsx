import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { styles } from "../css/register.js";
import { useDispatch } from "react-redux";
import { setUserDetails, setLoading } from "../store/slices/authSlice.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from '../config';

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.auth);

    async function handleRegister(e) {
        e.preventDefault();

        setNameError("");
        setEmailError("");
        setPasswordError("");
        setGeneralError("");


        let hasError = false;

        if (!name) {
            setNameError("Name is required");
            hasError = true;
        }

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
            const response = await axios.post(`${API_URL}/api/user/register`, {
                name,
                email,
                password,
            });
            console.log(response);
            if (response.data.error) {
                setGeneralError(
                    response.data.error.info || response.data.error.message
                );
                return;
            }
            dispatch(setUserDetails(response.data.data.user));
            navigate("/communities");

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
                        Join <span className={styles.highlight}>MeetNest</span>
                    </h1>

                    <p className={styles.desc}>
                        Create your account and start building communities,
                        hosting events, and connecting with people.
                    </p>

                    <div className={styles.list}>
                        {[
                            "Create and manage events",
                            "Connect with like-minded people",
                            "Grow your community",
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
                            Create an account
                        </h2>

                        <p className={styles.formSubtitle}>
                            Sign up to get started
                        </p>

                        <form onSubmit={handleRegister} className="space-y-5">

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className={styles.input}
                                    onChange={(e) => setName(e.target.value)}

                                />
                                {nameError && (
                                    <span className={styles.errorTextField}>
                                        {nameError}
                                    </span>
                                )}
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className={styles.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && (
                                    <span className={styles.errorTextField}>
                                        {emailError}
                                    </span>
                                )}
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Password</label>
                                <input
                                    type="password"
                                    placeholder="Min 6 characters"
                                    className={styles.input}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && (
                                    <span className={styles.errorTextField}>
                                        {passwordError}
                                    </span>
                                )}
                            </div>

                            <button className={styles.button} disabled={isLoading}>
                                {isLoading ? "Creating..." : "Create Account"}
                            </button>
                            {generalError && (
                                <p className={styles.errorTextGeneral}>
                                    {generalError}
                                </p>
                            )}
                            <p className={styles.loginText}>
                                Already have an account?{" "}
                                <Link to="/login" className={styles.link}>
                                    Login
                                </Link>
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default RegisterPage;