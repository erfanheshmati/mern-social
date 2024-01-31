import PostSide from "../../components/postSide/PostSide"
import ProfileSide from "../../components/profileSide/ProfileSide"
import RightSide from "../../components/rightSide/RightSide"
import "./Home.css"

export default function Home() {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}
