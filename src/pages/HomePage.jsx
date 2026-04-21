
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import homePage from "../assets/homePage.png";
import styles from "../css/homePage.js";

function HomePage() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.container}>

      {/* Glow effect */}
      <div className={styles.glow}></div>

      <div className={styles.inner}>

        {/* LEFT SECTION */}
        <div className={styles.left}>

          <div className={styles.tag}>
            🚀 Community Platform
          </div>

          <h1 className={styles.heading}>
            <span className="text-gray-900">Connect People.</span>
            <br />
            <span className="text-emerald-500">Create Moments.</span>
          </h1>

          <p className={styles.description}>
            Discover events, build communities, and connect with people
            around you effortlessly. Manage everything in one place.
          </p>

          {/* FEATURES */}
          <div className={styles.features}>
            {[
              "Create and manage events easily",
              "Join communities that match your interests",
              "Connect with people nearby"
            ].map((item, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          {!user ? (
            <div className="flex gap-4 pt-3 justify-center lg:justify-start">
              <Link to="/register" className={styles.buttonPrimary}>
                Get Started
              </Link>

              <Link to="/login" className={styles.buttonOutline}>
                Login
              </Link>
            </div>
          ) : (
            <div className="pt-3">
              <Link to="/events" className={styles.buttonPrimary}>
                Explore Events
              </Link>
            </div>
          )}

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className={styles.rightCard}>
            <img
              src={homePage}
              alt="community"
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
