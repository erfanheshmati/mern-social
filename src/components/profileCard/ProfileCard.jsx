import { useSelector } from "react-redux"
import "./ProfileCard.css"
import { Link } from "react-router-dom"

export default function ProfileCard({ location }) {
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const posts = useSelector((state) => state.postReducer.posts)

    return (
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
            </div>

            <div className="ProfileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.followings.length}</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {location === "profilePage" && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>{posts.filter((post) =>post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {location === "profilePage" ? "" :
                <span>
                    <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>My Profile</Link>
                </span>
            }
        </div>
    )
}
