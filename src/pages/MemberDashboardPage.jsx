
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles, { categoryStyles } from "../css/memberDashBoard.js";
import { setExistingDetails, leaveCommunity } from "../store/slices/communitySlice";
import { setExistingEventsDetails } from "../store/slices/eventSlice";
import { makeHost } from "../store/slices/authSlice";
import { API_URL } from "../config";

function MemberDashboardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const joinedCommunities =
    useSelector((state) => state.community?.joinedCommunities) || [];
  const rsvpedEvents =
    useSelector((state) => state.event?.rsvpedEvents) || [];

  useEffect(() => {
    if (!user?._id) return;

    if (user?.role === "host") {
      navigate("/host/dashboard");
      return;
    }

    async function fetchDashboard() {
      try {
        const res = await axios.get(`${API_URL}/api/user/dashboard`, {
          withCredentials: true,
        });

        const data = res.data?.data;

        dispatch(
          setExistingDetails({
            joinedCommunities: data?.joinedCommunities || [],
          })
        );

        dispatch(
          setExistingEventsDetails({
            rsvpedEvents: data?.rsvpedEvents || [],
          })
        );
      } catch (err) {
        console.log(err);
      }
    }

    fetchDashboard();
  }, [user?._id]);

  async function handleLeaveCommunity(id) {
    try {
      const res = await axios.patch(
        `${API_URL}/api/user/leave-community/${id}`,
        {},
        { withCredentials: true }
      );

      if (res.data.error) {
        alert(res.data.error.message);
        return;
      }

      dispatch(leaveCommunity({ communityId: id }));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleMakeHost() {
    try {
      const res = await axios.patch(
        `${API_URL}/api/user/make-host`,
        {},
        { withCredentials: true }
      );

      if (res.data?.error) {
        alert(res.data.error.message);
        return;
      }

      dispatch(makeHost());

      navigate("/host/dashboard");

    } catch (err) {
      console.log(err);
    }
  }

  const myEvents = rsvpedEvents.filter((e) => e?._id || e?.eventId);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>
              Welcome back, {user?.name || "User"}
            </h1>
            <span className={styles.badge}>Member</span>
          </div>

          {user?.role === "member" && (
            <button onClick={handleMakeHost} className={styles.hostBtn}>
              Become a Host
            </button>
          )}
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Communities</h2>

          {joinedCommunities.length === 0 ? (
            <p className={styles.emptyText}>
              You haven't joined any communities yet.
            </p>
          ) : (
            <div className={styles.grid}>
              {joinedCommunities.map((c) => (
                <div key={c._id} className={styles.card}>

                  <div className={styles.communityRow}>
                    <Link
                      to={`/communities/specific/${c._id}`}
                      className={styles.linkBlue}
                    >
                      {c.name}
                    </Link>

                    <button
                      onClick={() => handleLeaveCommunity(c._id)}
                      className={styles.leaveBtn}
                    >
                      Leave
                    </button>
                  </div>

                  <div>
                    <span
                      className={`${styles.categoryBadge} ${categoryStyles[c.category?.trim().toLowerCase()] || ""
                        }`}
                    >
                      {c.category?.toUpperCase() || "GENERAL"}
                    </span>
                  </div>

                  <p className={styles.textSmall}>
                    {c.description || "No description available"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>


        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My RSVPs</h2>

          {myEvents.length === 0 ? (
            <p className={styles.emptyText}>
              You haven't RSVP'd to any events yet.
            </p>
          ) : (
            <div className={styles.grid}>
              {myEvents.map((event) => {
                const eventId = event._id || event.eventId;

                return (
                  <div key={eventId} className={styles.card}>
                    <Link
                      to={`/events/specific/${eventId}`}
                      className={styles.linkGreen}
                    >
                      {event.name}
                    </Link>

                    <p className={styles.textSmall}>
                      📍 {event.city || "Online"}
                    </p>

                    <p className={styles.textSmall}>
                      🕒{" "}
                      {event.time
                        ? new Date(event.time).toLocaleString()
                        : "No Date"}
                    </p>

                    <p className={styles.textMuted}>
                      Community: {event.communityId?.name || "N/A"}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default MemberDashboardPage;
