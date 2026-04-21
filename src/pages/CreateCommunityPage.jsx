import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setExistingDetails, createCommunity } from "../store/slices/communitySlice";
import { setLoading } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "../css/createCommunityPage.js";
import { API_URL } from "../config";

function CreateCommunityPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [nameError, setNameError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.auth);

    async function handleCommunity(e) {
        e.preventDefault();

        setNameError("");
        setDescriptionError("");
        setCategoryError("");
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

        if (!category) {
            setCategoryError("Category is required");
            hasError = true;
        }

        if (hasError) return;

        try {
            dispatch(setLoading(true));

            const response = await axios.post(
                `${API_URL}/community/create`,
                { name, description, category },
                { withCredentials: true }
            );

            if (response.data.error) {
                setGeneralError(
                    response.data.error.info || response.data.error.message
                );
                return;
            }

            dispatch(
                setExistingDetails({
                    hostedCommunities: response.data.data.hostedCommunities,
                })
            );

            dispatch(createCommunity(response.data.data.community));

            navigate("/communities");
        } catch (error) {
            console.log(error);
            setGeneralError("Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                {/* LEFT SECTION */}
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Build Your <br />
                        <span className={styles.highlight}>Community</span>
                    </h1>

                    <p className={styles.desc}>
                        Create, grow, and manage your own community with ease.
                        Bring people together and organize events effortlessly.
                    </p>

                    <div className={styles.points}>
                        <div className={styles.pointItem}>
                            <span className={styles.pointIcon}>✓</span>
                            Easy to manage members
                        </div>

                        <div className={styles.pointItem}>
                            <span className={styles.pointIcon}>✓</span>
                            Organize events seamlessly
                        </div>

                        <div className={styles.pointItem}>
                            <span className={styles.pointIcon}>✓</span>
                            Build your own network
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div>
                    <div className={styles.form}>
                        <h2 className={styles.heading}>
                            Create a New Community
                        </h2>

                        <form onSubmit={handleCommunity} className="space-y-6">

                            <div>
                                <input
                                    placeholder="Enter community name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.input}
                                />
                                {nameError && (
                                    <span className={styles.errorTextField}>{nameError}</span>
                                )}
                            </div>

                            <div>
                                <textarea
                                    placeholder="Community description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={styles.textarea}
                                />
                                {descriptionError && (
                                    <span className={styles.errorTextField}>
                                        {descriptionError}
                                    </span>
                                )}
                            </div>

                            <div>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className={styles.select}
                                >
                                    <option value="">Select category</option>
                                    <option value="mern">mern</option>
                                    <option value="sports">sports</option>
                                    <option value="jobs">jobs</option>
                                    <option value="chess">chess</option>
                                    <option value="politics">politics</option>
                                    <option value="cooking">cooking</option>
                                </select>

                                {categoryError && (
                                    <span className={styles.errorTextField}>
                                        {categoryError}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={styles.button}
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating..." : "Create Community"}
                            </button>

                            {generalError && (
                                <p className={styles.errorTextGeneral}>
                                    {generalError}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateCommunityPage;