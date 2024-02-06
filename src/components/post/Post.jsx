import "./Post.css"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Like from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import { useSelector } from "react-redux"


export default function Post({ data }) {
    const { user } = useSelector((state) => state.authReducer.authData)
    return (
        <div className="Post">
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

            <div className="postReact">
                <img src={data.liked ? Like : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{data.likes} likes</span>

            <div className="details">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}
