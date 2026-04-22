import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../css/hostDashBoard.js";
import {
    setExistingDetails,
    deleteCommunity,
    leaveCommunity,
} from "../store/slices/communitySlice";

import { deleteEvent, setExistingEventsDetails, deleteEventsByCommunity } from "../store/slices/eventSlice";
import { API_URL } from '../config';

function HostDashboardPage() {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.user);

    const hostedCommunities =
        useSelector((state) => state.community.hostedCommunities) || [];

    const joinedCommunities =
        useSelector((state) => state.community.joinedCommunities) || [];

    const rsvpEvents =
        useSelector((state) => state.event.rsvpedEvents) || [];

    const myCreatedEvents =
        useSelector((state) => state.event.myCreatedEvents) || [];

    useEffect(() => {
        async function fetchDashboard() {
            try {
                const res = await axios.get(
                    `${API_URL}/api/user/host/dashboard`,
                    { withCredentials: true }
                );

                const data = res.data.data;

                dispatch(
                    setExistingDetails({
                        hostedCommunities: data.hostedCommunities || [],
                        joinedCommunities: data.joinedCommunities || [],
                    })
                );

                dispatch(
                    setExistingEventsDetails({
                        rsvpedEvents: data.rsvpedEvents || [],
                        myCreatedEvents: data.myCreatedEvents || []
                    })
                );
            } catch (err) {
                console.log(err);
            }
        }

        if (currentUser?._id) fetchDashboard();
    }, [currentUser?._id]);

    const handleDelete = async (communityId) => {
        const res = await axios.delete(
            `${API_URL}/api/community/${communityId}`,
            { withCredentials: true }
        );

        if (res.data.error) return alert(res.data.error.message);

        dispatch(deleteCommunity({ communityId }));
        dispatch(deleteEventsByCommunity({ communityId }));
    };

    const handleLeave = async (communityId) => {
        const res = await axios.patch(
            `${API_URL}/api/user/leave-community/${communityId}`,
            {},
            { withCredentials: true }
        );

        if (res.data.error) return alert(res.data.error.message);

        dispatch(leaveCommunity({ communityId }));
    };
    const handleDeleteEvent = async (eventId) => {
        const res = await axios.delete(
            `${API_URL}/api/event/${eventId}`,
            { withCredentials: true }
        );

        if (res.data.error) return alert(res.data.error.message);

        dispatch(deleteEvent({ eventId }));
    };
    return (
        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <div>
                        <h1 className={styles.title}>
                            Welcome back, {currentUser?.name}
                        </h1>

                        <span className={styles.badge}>Host</span>
                    </div>
                </div>


                <section className={styles.section}>

                    <div className="flex justify-between items-center mb-4">
                        <h2 className={styles.sectionTitle}>
                            My Hosted Communities
                        </h2>
                        <Link
                            to="/communities/create"
                            className={styles.primaryBtn}
                        >
                            + Create Community
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        {hostedCommunities.map((c) => (
                            <div key={c._id} className={styles.card}>

                                <div className="flex justify-between items-start">
                                    <Link
                                        to={`/communities/specific/${c._id}`}
                                        className={styles.link}
                                    >
                                        {c.name}
                                    </Link>

                                    <span className={styles.category}>
                                        {c.category || "General"}
                                    </span>
                                </div>

                                <p className={styles.description}>
                                    {c.description || "No description"}
                                </p>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={() => handleDelete(c._id)}
                                        className={styles.deleteBtn}
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {hostedCommunities.length === 0 && (
                        <p className="text-sm text-gray-500">
                            No hosted communities yet.
                        </p>
                    )}

                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}> Joined Communities </h2>
                    <div className={styles.grid}>
                        {joinedCommunities.map((c) => (
                            <div key={c._id} className={`${styles.card} ${styles.joinedCard}`}>

                                {/* TOP ROW */}
                                <div className="flex justify-between items-start">
                                    <Link
                                        to={`/communities/specific/${c._id}`}
                                        className={styles.link}
                                    >
                                        {c.name}
                                    </Link>

                                    <span className={styles.category}>
                                        {c.category}
                                    </span>
                                </div>


                                <p className={styles.description}>
                                    {c.description || "No description available"}
                                </p>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={() => handleLeave(c._id)}
                                        className={styles.leaveBtn}
                                    >
                                        Leave
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {joinedCommunities.length === 0 && (
                        <p className="text-sm text-gray-500">
                            Not joined communities yet.
                        </p>
                    )}
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>My RSVPs</h2>
                    <div className={styles.grid}>
                        {rsvpEvents.map((e) => (
                            <div key={e._id} className={styles.card}>

                                <Link
                                    to={`/events/specific/${e._id}`}
                                    className={styles.link}
                                >
                                    {e.name}
                                </Link>

                                <p className={styles.text}>📍 {e.city}</p>
                                <p className={styles.text}>
                                    🕒 {new Date(e.time).toLocaleString()}
                                </p>

                                <p className="text-xs text-gray-500 mt-2">
                                    Community: {e.communityId?.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {rsvpEvents.length === 0 && (
                        <p className="text-sm text-gray-500">
                            No RSVP yet.
                        </p>
                    )}
                </section>
                <section className={styles.section}>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className={styles.sectionTitle}>
                            My Created Events
                        </h2>

                        <Link to="/events/create" className={styles.primaryBtn}>
                            + Create Event
                        </Link>
                    </div>

                    <div className={styles.grid}>
                        {myCreatedEvents.map((e) => (
                            <div key={e._id} className={styles.card}>

                                <Link
                                    to={`/events/specific/${e._id}`}
                                    className={styles.link}
                                >
                                    {e.name}
                                </Link>

                                <p className={styles.text}>📍 {e.city}</p>
                                <p className={styles.text}>
                                    🕒 {new Date(e.time).toLocaleString()}
                                </p>

                                <p className="text-xs text-gray-500 mt-2">
                                    Community: {e.communityId?.name}
                                </p>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={() => handleDeleteEvent(e._id)}
                                        className={styles.deleteBtn}
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    {myCreatedEvents.length === 0 && (
                        <p className="text-sm text-gray-500">
                            No created events yet.
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default HostDashboardPage;