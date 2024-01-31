import { UilPen } from "@iconscout/react-unicons"
import "./InfoCard.css"

export default function InfoCard() {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem" height="1.2rem" />
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
