import "./FollowersCard.css"
import User from "../user/User"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getAllUsers } from "../../api/userRequest"

export default function FollowersCard() {
    const [persons, setPersons] = useState([])
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPerson = async () => {
            const { data } = await getAllUsers()
            setPersons(data)
        }
        fetchPerson()
    }, [])

    return (
        <div className="FollowersCard">
            <h3>People you may know</h3>
            {persons.map((person, id) => {
                if (person._id !== user._id) {
                    return <User person={person} key={id} />
                }
            })}
        </div>
    )
}
