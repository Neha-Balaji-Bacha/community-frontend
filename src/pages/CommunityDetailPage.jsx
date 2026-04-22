import { useParams } from "react-router-dom";
import { styles } from "../css/communityDetails.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    setExistingDetails,
    setCurrentCommunity,
    joinCommunity,
    leaveCommunity,
    deleteCommunity
} from "../store/slices/communitySlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from '../config';

function CommunityDetailPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const specificCommunity = useSelector((state) => state.community.currentCommunity);
    const { user, isLoggedIn, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        async function fetchSpecificCommunity() {
            try {
                const response = await axios.get(
                    `${API_URL}/community/specific?id=${id}`,
                    { withCredentials: true }
                );

                dispatch(setCurrentCommunity(response.data.data.community || null));

            } catch (error) {
                console.log("Error:", error);
            }
        }
        fetchSpecificCommunity();
    }, [dispatch, id]);


    const isJoined = specificCommunity?.members?.some(
        (member) => member?._id?.toString() === user?._id
    );

    const isHost = specificCommunity?.host?._id?.toString() === user?._id;

    async function handleJoin() {
        if (isLoading) return;

        if (!isLoggedIn) {
            alert("Please login first");
            return;
        }
        try {
            const response = await axios.patch(
                `${API_URL}/user/join-community/${id}`,
                {},
                { withCredentials: true }
            );

            if (response.data.error) {
                alert(response.data.error.message);
                return;
            }
            //Update join community list : redux
            dispatch(joinCommunity(response.data.data.community));


            //Update specific community : redux
            dispatch(setCurrentCommunity(response.data.data.community));

            //backend
            dispatch(setExistingDetails({
                joinedCommunities: response.data.data.joinedCommunities
            }));
        } catch (error) {
            console.log(error.message);
            alert("something went wrong");
        }
    }

    async function handleLeaveCommunity() {
        try {
            const response = await axios.patch(
                `${API_URL}/user/leave-community/${id}`,
                {},
                { withCredentials: true }
            );

            if (response.data.error) {
                alert(response.data.error.message);
                return;
            }
            dispatch(leaveCommunity({ communityId: id }));

            dispatch(setCurrentCommunity(response.data.data.community));

            dispatch(setExistingDetails({
                joinedCommunities: response.data.data.joinedCommunities
            }));

        } catch (error) {
            console.log(error.message);
        }
    }

    async function handleDeleteCommunity() {
        try {
            const response = await axios.delete(
                `${API_URL}/community/${id}`,
                { withCredentials: true }
            );

            if (response.data.error) {
                alert(response.data.error.message);
                return;
            }
            dispatch(deleteCommunity({ communityId: id }));

            dispatch(setExistingDetails({
                joinedCommunities: response.data.data.joinedCommunities,
                hostedCommunities: response.data.data.hostedCommunities
            }));

            navigate("/communities");

        } catch (error) {
            console.log(error.message);
        }
    }

    if (!specificCommunity) {
        return <div className={styles.page}>Loading...</div>;
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.card}>

                    <h1 className={styles.title}>
                        {specificCommunity.name}
                    </h1>

                    <p className={styles.category}>
                        category: {specificCommunity.category}
                    </p>

                    <p className={styles.host}>
                        Host: {specificCommunity?.host?.name || "Unknown"}
                    </p>

                    <p className={styles.description}>
                        Description: {specificCommunity.description}
                    </p>

                    <div className={styles.actions}>


                        {isHost && (
                            <>
                                <Link
                                    to={`/events/create?communityId=${id}`}
                                    className={styles.createBtn}
                                >
                                    + Create Event
                                </Link>

                                <button
                                    onClick={handleDeleteCommunity}
                                    className={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </>
                        )}


                        {!isHost && (
                            <>
                                {!isJoined && (
                                    <button
                                        disabled={isLoading || !isLoggedIn}
                                        onClick={handleJoin}
                                        className={styles.joinBtn}
                                    >
                                        Join Community
                                    </button>
                                )}

                                {isJoined && (
                                    <>
                                        <button disabled className={styles.joinBtn}>
                                            Joined
                                        </button>

                                        <button
                                            onClick={handleLeaveCommunity}
                                            className={styles.leaveBtn}
                                        >
                                            Leave
                                        </button>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                </div>


                <div className={styles.membersCard}>
                    <h2 className={styles.membersTitle}>
                        Members ({specificCommunity?.members?.length || 0})
                    </h2>

                    <div className={styles.membersList}>
                        {specificCommunity?.members?.map((member) => (
                            <div key={member._id} className={styles.memberItem}>
                                <span className={styles.memberName}>
                                    {member.name}
                                </span>
                                <span className={styles.memberEmail}>
                                    {member.email}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CommunityDetailPage;