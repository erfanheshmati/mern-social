import "./RightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from "../trendCard/TrendCard"
import { useState } from "react"
import { Modal } from '@mantine/core';
import PostShare from "../postShare/PostShare"

export default function RightSide() {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
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
