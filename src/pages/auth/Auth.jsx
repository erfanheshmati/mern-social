import "./Auth.css"
import Logo from "../../img/logo.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn, signUp } from "../../actions/authAction"

export default function Auth() {
    const [isSignUp, setIsSignUp] = useState(true)
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    })
    const [confirmPass, setConfirmPass] = useState(true)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false)
        }
        else {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true)
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpass: ""
        })
    }

    return (
        <div className="Auth">
            {/* Left Side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* Right Side */}
            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Sign Up" : "Log in"}</h3>
                    {isSignUp && (
                        <div>

                            <input type="text" placeholder="First Name" className="infoInput" name="firstname" onChange={handleInputChange} value={data.firstname} />
                            <input type="text" placeholder="Last Name" className="infoInput" name="lastname" onChange={handleInputChange} value={data.lastname} />
                        </div>
                    )}
                    <div>
                        <input type="text" placeholder="Username" className="infoInput" name="username" onChange={handleInputChange} value={data.username} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="infoInput" name="password" onChange={handleInputChange} value={data.password} />
                        {isSignUp && (

                            <input type="password" placeholder="Confirm Password" className="infoInput" name="confirmpass" onChange={handleInputChange} value={data.confirmpass} />
                        )}
                    </div>
                    <small style={{ display: confirmPass ? "none" : "block", color: "red", alignSelf: "flex-start", marginLeft: "5px" }}>
                        * confirm password is not same
                    </small>
                    <div>
                        <span onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>
                            {isSignUp ? "Already have an account? Login" : "Don't have an account? Signup"}
                        </span>
                    </div>
                    <button type="submit" className="btn infoBtn">
                        {isSignUp ? "Signup" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}
