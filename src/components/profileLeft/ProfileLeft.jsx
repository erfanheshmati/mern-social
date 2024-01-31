import FollowersCard from "../followersCard/FollowersCard"
import InfoCard from "../infoCard/InfoCard"
import LogoSearch from "../logoSearch/LogoSearch"
import "./ProfileLeft.css"

export default function ProfileLeft() {
    return (
        <div className="ProfileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}
