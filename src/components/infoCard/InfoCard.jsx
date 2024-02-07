import { UilPen } from "@iconscout/react-unicons"
import "./InfoCard.css"
import { useEffect, useState } from "react"
import { Modal } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as userApi from "../../api/userRequest"
import { logOut } from "../../actions/authAction";
import { uploadImage } from "../../actions/uploadAction"
import { updateUser } from "../../actions/userAction";

export default function InfoCard() {
    const [modalOpened, setModalOpened] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)
    const { password, ...other } = user
    const [formData, setFormData] = useState(other)
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)


    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            }
            else {
                const profileUser = await userApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    }, [user])

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            e.target.name === "profileImage" ? setProfileImage(img) : setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = formData
        if (profileImage) {
            const data = new FormData()
            const fileName = Date.now() + profileImage.name
            data.append("name", fileName)
            data.append("file", profileImage)
            userData.profilePicture = fileName
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        if (coverImage) {
            const data = new FormData()
            const fileName = Date.now() + coverImage.name
            data.append("name", fileName)
            data.append("file", coverImage)
            userData.coverPicture = fileName
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(updateUser(params.id, userData))
        setModalOpened(false)
    }

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                        <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
                        <Modal
                            overlayOpacity={0.55}
                            overlayBlur={3}
                            size="55%"
                            opened={modalOpened}
                            onClose={() => setModalOpened(false)}
                        >
                            <form className="infoForm">
                                <h3>Your info</h3>
                                <div>
                                    <input type="text" name="firstname" placeholder="First Name" className="infoInput" onChange={handleChange} value={formData.firstname} />
                                    <input type="text" name="lastname" placeholder="Last Name" className="infoInput" onChange={handleChange} value={formData.lastname} />
                                </div>
                                <div>
                                    <input type="text" name="worksAt" placeholder="Works At" className="infoInput" onChange={handleChange} value={formData.worksAt} />
                                </div>
                                <div>
                                    <input type="text" name="livesIn" placeholder="Lives In" className="infoInput" onChange={handleChange} value={formData.livesIn} />
                                    <input type="text" name="country" placeholder="Country" className="infoInput" onChange={handleChange} value={formData.country} />
                                </div>
                                <div>
                                    <input type="text" name="relationship" placeholder="Relationship Status" className="infoInput" onChange={handleChange} value={formData.relationship} />
                                </div>
                                <div>
                                    Profile Image
                                    <input type="file" name="profileImage" onChange={handleImageChange} />
                                    Cover Image
                                    <input type="file" name="coverImage" onChange={handleImageChange} />
                                </div>
                                <button className="btn info-btn" onClick={handleSubmit}>Update</button>
                            </form>
                        </Modal>
                    </div>
                ) : ""}
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser.livesIn}</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>

            <button className="btn logout-btn" onClick={handleLogOut}>Logout</button>
        </div>
    )
}