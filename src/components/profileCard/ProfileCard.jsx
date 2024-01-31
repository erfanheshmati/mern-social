import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"
import "./ProfileCard.css"

export default function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <dic className="vl"></dic>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>

            <span>
                My Profile
            </span>

        </div>
    )
}
