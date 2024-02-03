import { UilPen } from "@iconscout/react-unicons"
import "./InfoCard.css"
import { useState } from "react"
import { Modal } from '@mantine/core';

export default function InfoCard() {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
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
                                <input type="text" name="firstname" placeholder="First Name" className="infoInput" />
                                <input type="text" name="lasttname" placeholder="Last Name" className="infoInput" />
                            </div>
                            <div>
                                <input type="text" name="worksAt" placeholder="Works At" className="infoInput" />
                            </div>
                            <div>
                                <input type="text" name="livesIn" placeholder="Lives In" className="infoInput" />
                                <input type="text" name="country" placeholder="Country" className="infoInput" />
                            </div>
                            <div>
                                <input type="text" name="relationship" placeholder="Relationship Status" className="infoInput" />
                            </div>
                            <div>
                                Profile Image
                                <input type="file" name="profileImage" />
                                Cover Image
                                <input type="file" name="coverImage" />
                            </div>
                            <button className="btn info-btn">Update</button>
                        </form>
                    </Modal>
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Zainkeepscode</span>
            </div>

            <button className="btn logout-btn">Logout</button>
        </div>
    )
}
