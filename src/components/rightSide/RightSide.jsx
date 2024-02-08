import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from "../trendCard/TrendCard"
import { useState } from "react"
import { Modal } from '@mantine/core';
import PostShare from "../postShare/PostShare"
import { Link } from "react-router-dom"

export default function RightSide() {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className="RightSide">
            <div className="navIcons">
                <Link to="../home"><img src={Home} alt="" /></Link>
                <UilSetting />
                <img src={Noti} alt="" />
                <Link to="../chat"><img src={Comment} alt="" /></Link>
            </div>
            <TrendCard />
            <button className="btn r-btn" onClick={() => setModalOpened(true)}>Share</button>
            <Modal
                overlayOpacity={0.55}
                overlayBlur={3}
                size="55%"
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
            >
                <PostShare />
            </Modal>
        </div>
    )
}
