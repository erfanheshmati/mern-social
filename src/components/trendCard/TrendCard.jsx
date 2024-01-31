import "./TrendCard.css"
import { TrendData } from "../../data/TrendData.js"

export default function TrendCard() {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}
        </div>
    )
}
