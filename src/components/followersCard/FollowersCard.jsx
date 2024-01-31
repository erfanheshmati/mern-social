import "./FollowersCard.css"
import { followers } from "../../data/FollowersData"

export default function FollowersCard() {
    return (
        <div className="FollowersCard">
            <h3>Who is following you</h3>
            {followers.map((follower, id) => {
                return (
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt="" className="followerImg" />
                            <div className="followerName">
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <button className="btn fc-btn">Follow</button>
                    </div>
                )
            })}
        </div>
    )
}
