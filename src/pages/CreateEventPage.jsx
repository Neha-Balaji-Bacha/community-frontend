import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createEvent } from "../store/slices/eventSlice";
import { setLoading } from "../store/slices/authSlice";
import styles from "../css/createEventPage";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../config';

function CreateEventPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.auth);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [community, setCommunity] = useState("");
    const [city, setCity] = useState("");
    const [venue, setVenue] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [capacity, setCapacity] = useState("");


    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [communityError, setCommunityError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const hostedCommunities = useSelector(
        (state) => state.community.hostedCommunities || []
    );

    async function handleEvent(e) {
        e.preventDefault();

        setNameError("");
        setDescriptionError("");
        setCommunityError("");
        setGeneralError("");

        let hasError = false;

        if (!name) {
            setNameError("Name is required");
            hasError = true;
        }

        if (!description) {
            setDescriptionError("Description is required");
            hasError = true;
        }

        if (!community) {
            setCommunityError("Please select a community");
            hasError = true;
        }

        if (hasError) return;

        try {
            dispatch(setLoading(true));

            const response = await axios.post(
                `${API_URL}/api/event/create`,
                {
                    name,
                    description,
                    communityId: community,
                    city,
                    venue,
                    time: dateTime,
                    capacity,
                    mode: "offline",
                },
                { withCredentials: true }
            );

            if (response.data.error) {
                setGeneralError(
                    response.data.error.info || response.data.error.message
                );
                return;
            }


            dispatch(createEvent(response.data.data.event));

            setName("");
            setDescription("");
            setCommunity("");
            setCity("");
            setVenue("");
            setDateTime("");
            setCapacity("");

            navigate("/events");

        } catch (error) {
            console.log(error);
            setGeneralError("Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleEvent} className={styles.form}>
                <h2 className={styles.heading}>Create a New Event</h2>

                <input
                    placeholder="Enter event name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${styles.input} ${nameError ? styles.inputError : ""}`}
                />
                {nameError && (
                    <span className={styles.errorTextField}>{nameError}</span>
                )}


                <textarea
                    placeholder="Event description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${styles.textarea} ${descriptionError ? styles.inputError : ""}`}
                />
                {descriptionError && (
                    <span className={styles.errorTextField}>{descriptionError}</span>
                )}


                <select
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    className={`${styles.select} ${communityError ? styles.inputError : ""}`}
                >
                    <option value="">Select Community</option>
                    {hostedCommunities.map((c) => (
                        <option key={c._id} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                {communityError && (
                    <span className={styles.errorTextField}>{communityError}</span>
                )}

                <input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.input}
                />

                <input
                    placeholder="Venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className={styles.input}
                />

                <input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className={styles.input}
                />

                <input
                    type="number"
                    placeholder="Capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className={styles.input}
                />

                <button
                    type="submit"
                    className={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? "Creating..." : "Create Event"}
                </button>

                {generalError && (
                    <p className={styles.errorTextGeneral}>
                        {generalError}
                    </p>
                )}
            </form>
        </div>
    );
}

export default CreateEventPage;