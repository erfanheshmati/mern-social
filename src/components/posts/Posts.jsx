import "./Posts.css"
import Post from "../post/Post"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPostsTimeline } from "../../actions/postAction"
import { useParams } from "react-router-dom"

export default function Posts() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)
    const params = useParams()

    useEffect(() => {
        dispatch(getPostsTimeline(user._id))
    }, [])

    if (!posts) return "No Posts"
    if (params.id) posts = posts.filter((post) => post.userId === params.id)

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
