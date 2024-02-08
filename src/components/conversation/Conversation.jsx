import { useEffect, useState } from "react"
import { getUser } from "../../api/userRequest"


export default function Conversation({ data, currentUserId }) {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        console.log(userId)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUserData()
    }, [])

    return (
        <>
            <div className="follower conversation">
                <div>
                    <div className="online-dot"></div>
                    <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"} alt="" style={{ widows: "50px", height: "50px",borderRadius:"50%" }} />
                    <div className="name" style={{ fontSize: "0.8rem" }}>
                        <span>{userData?.firstname} {userData?.lastname}</span>
                        <span>Online</span>
                    </div>
                </div>
            </div>
            <hr style={{ widows: "85%", border: "0.1px solid #ececec" }} />
        </>
    )
}
