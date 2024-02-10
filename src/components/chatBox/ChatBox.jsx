import { useEffect, useState } from "react"
import { getUser } from "../../api/userRequest"
import "./ChatBox.css"
import { addMessage, getMessages } from "../../api/messageRequest"
import { format } from "timeago.js"
import InputEmoji from "react-input-emoji"


export default function ChatBox({ chat, currentUser, setSendMessage, recieveMessage }) {
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")


    // fetch header data
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (chat !== null) getUserData()
    }, [chat, currentUser])


    // fetch message data
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id)
                setMessages(data)
            } catch (error) {
                console.log(error)
            }
        }
        if (chat !== null) fetchMessages()
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }


    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id
        }
        // send message to db
        try {
            const { data } = await addMessage(message)
            setMessages([...messages, data])
            setNewMessage("")
        } catch (error) {
            console.log(error)
        }
        // send message to socket server
        const recieverId = chat.members.find((id) => id !== currentUser)
        setSendMessage({ ...messages, recieverId })
    }


    useEffect(() => {
        if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
            setMessages({ ...messages, recieveMessage })
        }
    }, [recieveMessage])


    return (
        <div className="chatbox-container">
            {chat ? (
                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>
                                <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"} alt="" style={{ widows: "50px", height: "50px", borderRadius: "50%" }} />
                                <div className="name" style={{ fontSize: "0.8rem" }}>
                                    <span>{userData?.firstname} {userData?.lastname}</span>
                                </div>
                            </div>
                        </div>
                        <hr style={{ widows: "85%", border: "0.1px solid #ececec" }} />
                    </div>

                    {/* chatbox message */}
                    <div className="chat-body">
                        {messages.map((message) => (
                            <>
                                <div className={message.senderId === currentUser ? "message own" : "message"}>
                                    <span>{message.text}</span>
                                    <span>{format(message.createdAt)}</span>
                                </div>
                            </>
                        ))}
                    </div>

                    {/* chat sender */}
                    <div className="chat-sender">
                        <div>+</div>
                        <InputEmoji value={newMessage} onChange={handleChange} />
                        <div className="btn send-btn" onClick={handleSend}>Send</div>
                    </div>
                </>
            ) :
                (
                    <span className="chatbox-empty-message">Tap on a chat to start conversation</span>
                )

            }
        </div>
    )
}
