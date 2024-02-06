import "./Posts.css"
import Post from "../post/Post"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPostsTimeline } from "../../actions/postAction"

export default function Posts() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    const { posts, loading } = useSelector((state) => state.postReducer)

    useEffect(() => {
        dispatch(getPostsTimeline(user._id))
    }, [])

    return (
        <div className="Posts">
            {loading
                ? "Fetching posts..."
                : posts.map((post, id) => {
                    return <Post data={post} id={id} key={id} />
                })
            }
        </div>
    )
}
