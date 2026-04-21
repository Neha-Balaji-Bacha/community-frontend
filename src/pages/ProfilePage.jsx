import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import axios from "axios";
import styles from "../css/profilePage.js";
import { makeHost, setUserDetails } from "../store/slices/authSlice";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function ProfilePage() {
  const { user } = useSelector((state) => state.auth);
  const { joinedCommunities } = useSelector((state) => state.community);
  const { rsvpedEvents } = useSelector((state) => state.event);

  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const BASE_URL = API_URL.split("/api")[0];

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading profile...
      </div>
    );
  }

  async function upgradeToHost() {
    try {
      await axios.patch(`${API_URL}/user/make-host`, {}, { withCredentials: true });
      dispatch(makeHost());
    } catch (err) {
      console.log(err);
    }
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    dispatch(setUserDetails({ ...user, profilePicUrl: previewUrl }));

    try {
      const formData = new FormData();
      formData.append("profilePic", file);

      const res = await axios.patch(
        `${API_URL}/user/upload-profile-pic`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res?.data?.data?.profilePicUrl) {
        dispatch(
          setUserDetails({
            ...user,
            profilePicUrl: res.data.data.profilePicUrl,
          })
        );
      }

      fileInputRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  }

  const imageUrl = user.profilePicUrl
    ? user.profilePicUrl.startsWith("blob:")
      ? user.profilePicUrl
      : `${BASE_URL}${user.profilePicUrl}`
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              {imageUrl ? (
                <img src={imageUrl} alt="profile" className={styles.avatarImg} />
              ) : (
                <span className="flex items-center justify-center w-full h-full text-lg font-bold bg-emerald-500 text-white">
                  {user.name?.charAt(0)?.toUpperCase()}
                </span>
              )}
            </div>

            <button
              onClick={() => fileInputRef.current?.click()}
              className={styles.uploadBtn}
            >
              Edit
            </button>

            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>

          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.email}>{user.email}</p>

          <span
            className={`${styles.roleBase} ${user.role === "host" ? styles.roleHost : styles.roleMember
              }`}
          >
            {user.role === "host" ? "Host" : "Member"}
          </span>

          <p className={styles.bio}>
            Passionate about building communities and organizing events.
          </p>
        </div>

        {/* STATS */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <p className={`${styles.statNumber} text-emerald-600`}>
              {joinedCommunities?.length || 0}
            </p>
            <p className={styles.statLabel}>Joined Communities</p>
          </div>

          <div className={styles.statCard}>
            <p className={`${styles.statNumber} text-blue-600`}>
              {rsvpedEvents?.length || 0}
            </p>
            <p className={styles.statLabel}>Registered Events</p>
          </div>
        </div>

        {/* ✅ ROLE BASED ACTIONS */}
        {user.role === "host" ? (
          <div className={styles.actionContainer}>
            <Link to="/events/create" className={styles.primaryBtn}>
              Create Event
            </Link>

            <Link to="/communities/create" className={styles.secondaryBtn}>
              Create Community
            </Link>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-6 text-center">
            Upgrade to Host to create and manage events and communities.
          </p>
        )}

        {/* BUTTONS */}
        <div className={styles.btnContainer}>
          {user.role === "member" && (
            <button
              onClick={upgradeToHost}
              className={styles.upgradeBtn}
            >
              Upgrade to Host
            </button>
          )}

          <Link to="/logout" className={styles.logoutBtn}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;