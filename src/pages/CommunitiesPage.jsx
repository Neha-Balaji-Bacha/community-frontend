import { styles, categoryStyles } from "../css/communitiesPage.js";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllCommunities } from "../store/slices/communitySlice.js";
import { API_URL } from "../config";

function CommunitiesPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const communities = useSelector(
        (state) => state.community.allCommunities
    );

    useEffect(() => {
        async function fetchCommunities() {
            try {
                const response = await axios.get(
                    `${API_URL}/api/community/all`
                );

                dispatch(
                    setAllCommunities(response.data.data.communities || [])
                );
            } catch (error) {
                console.log("Error:", error);
            }
        }

        fetchCommunities();
    }, [dispatch]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1 className={`${styles.title} select-none`}>
                        Discover{" "}
                        <span className={styles.titleHighlight}>
                            Communities
                        </span>
                    </h1>

                    <p className={styles.subtitle}>
                        Find people, ideas, and groups that match your interests
                    </p>
                </div>

                <Link to="/communities/create" className={styles.button}>
                    + Create Community
                </Link>
            </div>

            <div className={styles.grid}>
                {communities.map((community) => (
                    <div
                        key={community._id}
                        onClick={() =>
                            navigate(`/communities/specific/${community._id}`)
                        }
                        className={styles.card}
                    >

                        <span
                            className={`${styles.categoryBadge} ${categoryStyles[community.category]
                                }`}
                        >
                            {community.category.toUpperCase()}
                        </span>

                        <h2 className={styles.titleCard}>
                            {community.name}
                        </h2>

                        <p className={styles.description}>
                            {community.description}
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className="font-bold">Events : </span>
                                <span className={styles.statNumber}>
                                    {community.eventsCount || 0}
                                </span>
                                {/* <span>events</span> */}
                            </div>

                            <div className={styles.statItem}>
                                <span className="font-bold">Members : </span>
                                <span className={styles.statNumber}>
                                    {community.members?.length || 0}
                                </span>
                                {/* <span>members</span> */}
                            </div>
                        </div>


                        <div className={styles.footer}>
                            <span className={styles.footerText}>
                                View Community
                            </span>
                            <span className={styles.arrow}>→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommunitiesPage;