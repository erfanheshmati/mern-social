import { useSelector, useDispatch } from "react-redux"
import { followUser, unfollowUser } from "../../actions/userAction"
import { useState } from "react"

export default function User({ person }) {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following, setFollowing] = useState(person.followers.includes(user._id))

    const handleFollow = () => {
        following ? dispatch(unfollowUser(person._id, user)) : dispatch(followUser(person._id, user))
        setFollowing((prev) => !prev)
    }

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"} alt="" className="followerImg" />
                <div className="followerName">
                    <span>{person.firstname} {person.lastname}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className={following ? "btn fc-btn unfollow-btn" : "btn fc-btn"} onClick={handleFollow}>
                {following ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}
