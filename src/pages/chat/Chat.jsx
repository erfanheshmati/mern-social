import "./Chat.css"
import LogoSearch from "../../components/logoSearch/LogoSearch"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { userChats } from "../../api/chatRequest"
import { Link } from "react-router-dom"
import Conversation from "../../components/conversation/Conversation"
import ChatBox from "../../components/chatBox/ChatBox"
import { io } from "socket.io-client"

export default function Chat() {
    const { user } = useSelector((state) => state.authReducer.authData)
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const socket = useRef()
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [recieveMessage, setRecieveMessage] = useState(null)


    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])


    useEffect(() => {
        socket.current = io("http://localhost:8800")
        socket.current.emit("new-user-add", user._id)
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users)
        })
    }, [user])


    // send message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage)
        }
    }, [sendMessage])


    // recieve message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            setRecieveMessage(data)
        })
    }, [])


    return (
        <div className="chat">

            {/* left side */}
            <div className="left-side-chat">
                <LogoSearch />
                <div className="chat-container">
                    <h2>Chats</h2>
                    <div className="chat-list">
                        {chats.map((chat) => (
                            <div onClick={() => setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="right-side-chat">
                <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                    <div className="navIcons">
                        <Link to="../home"><img src={Home} alt="" /></Link>
                        <UilSetting />
                        <img src={Noti} alt="" />
                        <Link to="../chat"><img src={Comment} alt="" /></Link>
                    </div>
                </div>
                {/* chat body */}
                <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} recieveMessage={recieveMessage} />
            </div>
        </div>
    )
}
