import "./Posts.css"
import { PostsData } from "../../data/PostsData"
import Post from "../post/Post"

export default function Posts() {
    return (
        <div className="Posts">
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}
