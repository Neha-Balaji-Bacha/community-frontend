import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../css/eventsPage.js";
import { useDispatch, useSelector } from "react-redux";
import { setAllEvents } from "../store/slices/eventSlice";
import { API_URL } from "../config";

function EventsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [city, setCity] = useState("");
    const [keyword, setKeyword] = useState("");

    const events = useSelector((state) => state.event.allEvents);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get(`${API_URL}/api/event/all`);
                dispatch(setAllEvents(response.data.data.events || []));
            } catch (error) {
                console.log(error);
            }
        }

        fetchEvents();
    }, [dispatch]);

    async function handleSearch() {
        try {
            const response = await axios.get(`${API_URL}/api/event/all`, {
                params: { city, keyword },
            });

            dispatch(setAllEvents(response.data.data.events || []));
        } catch (error) {
            console.log(error);
        }
    }

    function formatDate(time) {
        return new Date(time).toLocaleString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <h1 className={`${styles.title} select-none`}>
                        Discover <span className={styles.highlight}>Events</span>
                    </h1>
                    <p className={`{${styles.subtitle} select-none}`}>
                        Find events happening around you
                    </p>
                </div>

                <Link to="/events/create" className={styles.createBtn}>
                    + Create Event
                </Link>
            </div>

            {/* Search */}
            <div className={styles.searchWrapper}>
                <input
                    placeholder="Filter by city"
                    className={styles.input}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <input
                    placeholder="Search by keyword"
                    className={styles.input}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

                <button className={styles.searchBtn} onClick={handleSearch}>
                    Search
                </button>
            </div>

            {/* Events */}
            {events.length === 0 ? (
                <p className={styles.empty}>No events found</p>
            ) : (
                <div className={styles.grid}>
                    {events.map((event) => (
                        <div
                            key={event._id}
                            onClick={() =>
                                navigate(`/events/specific/${event._id}`)
                            }
                            className={styles.card}
                        >
                            <h2 className={styles.titleCard}>{event.name}</h2>

                            <div className={styles.meta}>
                                <span> <span className="font-bold">City : </span> {event.city}</span>
                                <span> <span className="font-bold"> Venue : </span>{event.venue}</span>
                            </div>

                            <p className={styles.description}>
                                {event.description}
                            </p>

                            <p className={styles.time}>
                                <span className="font-bold">Time & Date : </span> {formatDate(event.time)}
                            </p>

                            <div className={styles.footer}>
                                <span className={styles.footerText}>
                                    View Event
                                </span>
                                <span className={styles.arrow}>→</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default EventsPage;