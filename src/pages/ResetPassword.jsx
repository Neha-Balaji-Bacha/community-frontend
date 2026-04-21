// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config";
// import { styles } from "../css/resetPassword.js";

// function ResetPassword() {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setIsError(true);
//       return setMessage("Passwords do not match");
//     }

//     try {
//       const res = await axios.post(
//         `${API_URL}/user/reset-password/${token}`,
//         { password }
//       );

//       setIsError(false);
//       setMessage(res.data.data.message);

//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);

//     } catch (err) {
//       setIsError(true);
//       setMessage(
//         err.response?.data?.error?.message || "Reset failed"
//       );
//     }
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.container}>

//         <h2 className={styles.title}>Reset Password</h2>

//         <p className={styles.subtitle}>
//           Enter your new password below
//         </p>

//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="password"
//             placeholder="New password"
//             className={styles.input}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Confirm password"
//             className={styles.input}
//             required
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />

//           <button type="submit" className={styles.button}>
//             Reset Password
//           </button>
//         </form>

//         {message && (
//           <p
//             className={`${styles.message} ${isError ? styles.error : styles.success
//               }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;