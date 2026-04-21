import styles from "../css/navBar.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import logo from "../assets/logo.png";
import { useState } from "react";


function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navWrapper}>

                <div className={styles.leftSection}>
                    <Link to="/" className={styles.logoWrapper}>
                        <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
                        <span className={styles.logoText}>MeetNest</span>
                    </Link>

                    <div className={styles.navLinks}>
                        <NavLink to="/communities" className={({ isActive }) => styles.navLink(isActive)}>
                            Communities
                        </NavLink>

                        <NavLink to="/events" className={({ isActive }) => styles.navLink(isActive)}>
                            Events
                        </NavLink>

                        {user && (<NavLink to="/dashboard" className={({ isActive }) => styles.navLink(isActive)}>
                            Dashboard
                        </NavLink>)}

                        {user && (
                            <NavLink to="/profile" className={({ isActive }) => styles.navLink(isActive)}>
                                Profile
                            </NavLink>
                        )}
                    </div>
                </div>

                {/* RIGHT (DESKTOP) */}
                <div className={styles.rightSection}>
                    {user ? (
                        <Link to="/logout" className={styles.buttonPrimary}>
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className={styles.buttonOutline}>
                                Login
                            </Link>
                            <Link to="/register" className={styles.buttonPrimary}>
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className={styles.mobileMenu}>

                        <NavLink to="/communities" onClick={() => setIsOpen(false)}>
                            Communities
                        </NavLink>

                        <NavLink to="/events" onClick={() => setIsOpen(false)}>
                            Events
                        </NavLink>

                        {user && (<NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
                            Dashboard
                        </NavLink>)
                        }

                        <NavLink to="/profile" onClick={() => setIsOpen(false)}>
                            Profile
                        </NavLink>

                        {user ? (
                            <Link to="/logout" className={styles.buttonPrimary}>
                                Logout
                            </Link>
                        ) : (
                            <>
                                <Link to="/login" className={styles.buttonOutline}>
                                    Login
                                </Link>
                                <Link to="/register" className={styles.buttonPrimary}>
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
