import {
    setAllRSVPEvents,
    setCurrentEvent,
    deleteEvent,
} from "../store/slices/eventSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../css/eventDetailPage.js";
import { API_URL } from "../config";

function EventDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const event = useSelector((state) => state.event.currentEvent);
    const rsvpedEvents = useSelector((state) => state.event.rsvpedEvents);
    const user = useSelector((state) => state.auth.user);

    const [generalError, setGeneralError] = useState("");

    const isJoined = (rsvpedEvents || []).some(
        (e) => e._id.toString() === id
    );

    const isHost = user?._id === event?.host?._id;

    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await axios.get(
                    `${API_URL}/event/specific?id=${id}`,
                    { withCredentials: true }
                );

                if (response.data.error || !response.data?.data?.event) {
                    setGeneralError("Event not found");
                    return;
                }

                dispatch(setCurrentEvent(response.data.data.event));
            } catch (error) {
                setGeneralError("Something went wrong");
            }
        }

        fetchEvent();
    }, [id, dispatch]);

    async function handleJoinEvent() {
        if (!user?._id) {
            setGeneralError("Please login first");
            return;
        }

        try {
            const response = await axios.patch(
                `${API_URL}/user/toggleRSVP/${id}`,
                {},
                { withCredentials: true }
            );

            if (response.data.error) {
                setGeneralError(
                    response.data.error.info || response.data.error.message
                );
                return;
            }

            dispatch(setAllRSVPEvents(response.data.data.rsvpedEvents));
            dispatch(setCurrentEvent(response.data.data.updatedEvent));
        } catch (error) {
            setGeneralError("Something went wrong");
        }
    }

    async function handleDeleteEvent() {
        if (!user?._id) {
            setGeneralError("Please login first");
            return;
        }

        try {
            const response = await axios.delete(
                `${API_URL}/event/${id}`,
                { withCredentials: true }
            );

            if (response.data.error) {
                setGeneralError(
                    response.data.error.info || response.data.error.message
                );
                return;
            }

            dispatch(deleteEvent({ eventId: id }));
            navigate("/events");
        } catch (error) {
            setGeneralError("Failed to delete event");
        }
    }

    if (!event) {
        return <div className={styles.page}>Loading...</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                {/* Main Card */}
                <div className={styles.card}>
                    <h1 className={styles.title}>{event.name}</h1>

                    <p className={styles.description}>
                        {event.description}
                    </p>

                    <p className={styles.host}>
                        Hosted by {event.host?.name}
                    </p>

                    {/* Info */}
                    <div className={styles.section}>
                        <div className={styles.row}>
                            <span className={styles.label}>City</span>
                            <span className={styles.value}>{event.city || "N/A"}</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.label}>Venue</span>
                            <span className={styles.value}>{event.venue || "N/A"}</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.label}>Date & Time</span>
                            <span className={styles.value}>
                                {new Date(event.time).toLocaleString()}
                            </span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.label}>Capacity</span>
                            <span className={styles.value}>
                                {event.capacity
                                    ? `${event.capacity} spots`
                                    : "Unlimited"}
                            </span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.label}>Community</span>
                            <span className={styles.value}>
                                {event.communityId?.name}
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        {!isHost && (
                            <button
                                onClick={handleJoinEvent}
                                className={isJoined ? styles.leaveBtn : styles.joinBtn}
                            >
                                {isJoined ? "Cancel RSVP" : "RSVP Now"}
                            </button>
                        )}

                        {isHost && (
                            <button
                                onClick={handleDeleteEvent}
                                className={styles.deleteBtn}
                            >
                                Delete Event
                            </button>
                        )}
                    </div>

                    {generalError && (
                        <p className={styles.errorText}>{generalError}</p>
                    )}
                </div>

                {/* Attendees */}
                <div className={styles.attendeesCard}>
                    <h3 className={styles.attendeesTitle}>
                        Attendees ({event.rsvpedUsers?.length || 0})
                    </h3>

                    <div className={styles.attendeesList}>
                        {event.rsvpedUsers?.length === 0 ? (
                            <p className={styles.emptyText}>
                                No members joined yet
                            </p>
                        ) : (
                            event.rsvpedUsers.map((member) => (
                                <div key={member._id} className={styles.attendeeItem}>
                                    <span className={styles.attendeeName}>
                                        {member.name}
                                    </span>
                                    <span className={styles.attendeeEmail}>
                                        {member.email}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EventDetailPage;