import "./PostShare.css"
import ProfileImage from "../../img/profileImg.jpg"
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from "@iconscout/react-unicons"
import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { uploadImage, uploadPost } from "../../actions/uploadAction"

export default function PostShare() {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const { user } = useSelector((state) => state.authReducer.authData)
    const desc = useRef()
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.postReducer.uploading)

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }

    const reset = () => {
        setImage(null)
        desc.current.value = ""
    }

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder="What's happening" ref={desc} required />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo" }} onClick={() => imageRef.current.click()}>
                        <UilScenery />Photo
                    </div>
                    <div className="option" style={{ color: "var(--video" }}>
                        <UilPlayCircle />Video
                    </div>{" "}
                    <div className="option" style={{ color: "var(--location" }}>
                        <UilLocationPoint />Location
                    </div>{" "}
                    <div className="option" style={{ color: "var(--schedule" }}>
                        <UilSchedule />Schedule
                    </div>
                    <button className="btn ps-btn" onClick={handleSubmit} disabled={loading} >
                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}
