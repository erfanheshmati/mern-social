import PostShare from "../postShare/PostShare"
import Posts from "../posts/Posts"

import "./PostSide.css"

export default function PostSide() {
    return (
        <div className="PostSide">
            <PostShare />
            <Posts />
        </div>
    )
}
