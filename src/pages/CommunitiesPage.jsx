import { styles, categoryStyles } from "../css/communitiesPage.js";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllCommunities } from "../store/slices/communitySlice.js";
import { API_URL } from "../config";

function CommunitiesPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // main states
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    // temp states
    const [tempSearch, setTempSearch] = useState("");
    const [tempCategory, setTempCategory] = useState("");

    const user = useSelector((state) => state.auth.user);

    const communities = useSelector(
        (state) => state.community.allCommunities
    );

    useEffect(() => {
        async function fetchCommunities() {
            try {
                const res = await axios.get(`${API_URL}/api/community/all`);
                dispatch(setAllCommunities(res.data.data.communities || []));
            } catch (err) {
                console.log(err);
            }
        }

        fetchCommunities();
    }, [dispatch]);

    const handleSearch = () => {
        setSearch(tempSearch);
        setCategory(tempCategory);
    };

    const filteredCommunities = communities.filter((c) => {
        const matchName = c.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchCategory = category
            ? c.category === category
            : true;

        return matchName && matchCategory;
    });

    return (
        <div className={styles.page}>
            {/* HEADER */}
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

                {user && user.role !== "member" && (
                    <Link to="/communities/create" className={styles.button}>
                        + Create Community
                    </Link>
                )}
            </div>

            {/* SEARCH */}
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search by community name"
                    value={tempSearch}
                    onChange={(e) => setTempSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className={styles.input}
                />

                <select
                    value={tempCategory}
                    onChange={(e) => setTempCategory(e.target.value)}
                    className={styles.select}
                >
                    <option value="">All Categories</option>
                    <option value="mern">MERN</option>
                    <option value="chess">Chess</option>
                    <option value="cooking">Cooking</option>
                    <option value="tech">Tech</option>
                    <option value="jobs">Jobs</option>
                    <option value="sports">Sports</option>
                </select>

                <button
                    onClick={handleSearch}
                    className={styles.searchBtn}
                >
                    Search
                </button>
            </div>

            {/* GRID */}
            <div className={styles.grid}>
                {filteredCommunities.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500 mt-10">
                        No communities found
                    </p>
                ) : (
                    filteredCommunities.map((community) => (
                        <div
                            key={community._id}
                            onClick={() =>
                                navigate(`/communities/specific/${community._id}`)
                            }
                            className={styles.card}
                        >
                            <span
                                className={`${styles.categoryBadge} ${categoryStyles[community.category] ||
                                    categoryStyles.default
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
                                </div>

                                <div className={styles.statItem}>
                                    <span className="font-bold">Members : </span>
                                    <span className={styles.statNumber}>
                                        {community.members?.length || 0}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                <span className={styles.footerText}>
                                    View Community
                                </span>
                                <span className={styles.arrow}>→</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CommunitiesPage;