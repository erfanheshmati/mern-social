import PostSide from "../../components/postSide/PostSide"
import ProfileCard from "../../components/profileCard/ProfileCard"
import ProfileLeft from "../../components/profileLeft/ProfileLeft"
import RightSide from "../../components/rightSide/RightSide"
import "./Profile.css"

export default function Profile() {
    return (
        <div className="Profile">
            <ProfileLeft />

            <div className="profile-center">
                <ProfileCard location="profilePage" />
                <PostSide />
            </div>

            <RightSide />
        </div>
    )
}
