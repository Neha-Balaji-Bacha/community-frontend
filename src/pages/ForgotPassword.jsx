// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config";
// import { styles } from "../css/forgotPassword.js";

// function ForgotPassword() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [showResetForm, setShowResetForm] = useState(false);
//   const [token, setToken] = useState("");

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   // ================= FORGOT =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         `${API_URL}/user/forgot-password`,
//         { email }
//       );

//       setIsError(false);
//       setMessage(res.data.data.message);

//       const resetUrl = res.data.data.resetUrl;
//       const extractedToken = resetUrl?.split("/").pop();

//       setToken(extractedToken);
//       setShowResetForm(true);

//     } catch (err) {
//       setIsError(true);
//       setMessage("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= RESET =================
//   const handleReset = async (e) => {
//     e.preventDefault();

//     // 🔥 password length validation
//     if (password.length < 6) {
//       setIsError(true);
//       return setMessage("Password must be at least 6 characters");
//     }

//     // 🔥 match validation
//     if (password !== confirmPassword) {
//       setIsError(true);
//       return setMessage("Passwords do not match");
//     }

//     // 🔥 reset error before API call
//     setIsError(false);
//     setLoading(true);

//     try {
//       await axios.post(
//         `${API_URL}/user/reset-password/${token}`,
//         { password }
//       );

//       setIsError(false);
//       setMessage("Password reset successful! Redirecting...");

//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);

//     } catch (err) {
//       setIsError(true);
//       setMessage(
//         err.response?.data?.error?.message || "Reset failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>

//         {/* LEFT */}
//         <div className={styles.left}>
//           <h1 className={styles.leftTitle}>Reset Your Password</h1>

//           <p className={styles.leftDesc}>
//             Don’t worry! Enter your email and we’ll help you recover your account.
//           </p>

//           <div className={styles.list}>
//             <div>✓ Secure password reset</div>
//             <div>✓ Quick recovery process</div>
//             <div>✓ Stay connected with your community</div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className={styles.right}>
//           <div className={styles.formBox}>

//             {!showResetForm ? (
//               <>
//                 <h2 className={styles.title}>Forgot Password</h2>

//                 <p className="text-sm text-gray-500 text-center">
//                   Enter your email to receive reset access
//                 </p>

//                 <form onSubmit={handleSubmit} className={styles.form}>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className={styles.input}
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                   />

//                   <p className="text-xs text-gray-400 text-center">
//                     We’ll never share your email with anyone.
//                   </p>

//                   <div className={styles.buttonWrapper}>
//                     <button
//                       className={styles.button}
//                       disabled={loading}
//                     >
//                       {loading ? "Sending..." : "Send Reset Link"}
//                     </button>
//                   </div>
//                 </form>
//               </>
//             ) : (
//               <>
//                 <h2 className={styles.title}>Reset Password</h2>

//                 <p className="text-sm text-gray-500 text-center">
//                   Enter your new password
//                 </p>

//                 {/* 🔥 noValidate added */}
//                 <form
//                   onSubmit={handleReset}
//                   className={styles.form}
//                   noValidate
//                 >
//                   <input
//                     type="password"
//                     placeholder="New password"
//                     className={styles.input}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <input
//                     type="password"
//                     placeholder="Confirm password"
//                     className={styles.input}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />

//                   <div className={styles.buttonWrapper}>
//                     <button
//                       className={styles.button}
//                       disabled={loading}
//                     >
//                       {loading ? "Updating..." : "Submit New Password"}
//                     </button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {message && (
//               <p
//                 className={`${styles.message} ${
//                   isError ? styles.error : styles.success
//                 }`}
//               >
//                 {message}
//               </p>
//             )}

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { styles } from "../css/forgotPassword.js";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showResetForm, setShowResetForm] = useState(false);
  const [token, setToken] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ================= FORGOT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/user/forgot-password`,
        { email }
      );

      setIsError(false);
      setMessage(res.data.data.message);

      const resetUrl = res.data.data.resetUrl;
      const extractedToken = resetUrl?.split("/").pop();

      setToken(extractedToken);
      setShowResetForm(true);

    } catch (err) {
      setIsError(true);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ================= RESET =================
  const handleReset = async (e) => {
    e.preventDefault();

    // 🔥 password length validation
    if (password.length < 6) {
      setIsError(true);
      return setMessage("Password must be at least 6 characters");
    }

    // 🔥 match validation
    if (password !== confirmPassword) {
      setIsError(true);
      return setMessage("Passwords do not match");
    }

    // 🔥 reset error before API call
    setIsError(false);
    setLoading(true);

    try {
      await axios.post(
        `${API_URL}/user/reset-password/${token}`,
        { password }
      );

      setIsError(false);
      setMessage("Password reset successful! Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setIsError(true);
      setMessage(
        err.response?.data?.error?.message || "Reset failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.leftTitle}>Reset Your Password</h1>

          <p className={styles.leftDesc}>
            Don’t worry! Enter your email and we’ll help you recover your account.
          </p>

          <div className={styles.list}>
            <div>✓ Secure password reset</div>
            <div>✓ Quick recovery process</div>
            <div>✓ Stay connected with your community</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.formBox}>

            {!showResetForm ? (
              <>
                <h2 className={styles.title}>Forgot Password</h2>

                <p className="text-sm text-gray-500 text-center">
                  Enter your email to receive reset access
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.input}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p className="text-xs text-gray-400 text-center">
                    We’ll never share your email with anyone.
                  </p>

                  <div className={styles.buttonWrapper}>
                    <button
                      className={styles.button}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h2 className={styles.title}>Reset Password</h2>

                <p className="text-sm text-gray-500 text-center">
                  Enter your new password
                </p>

                {/* 🔥 noValidate added */}
                <form
                  onSubmit={handleReset}
                  className={styles.form}
                  noValidate
                >
                  <input
                    type="password"
                    placeholder="New password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className={styles.input}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <div className={styles.buttonWrapper}>
                    <button
                      className={styles.button}
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Submit New Password"}
                    </button>
                  </div>
                </form>
              </>
            )}

            {message && (
              <p
                className={`${styles.message} ${
                  isError ? styles.error : styles.success
                }`}
              >
                {message}
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;