import "./Auth.css"
import Logo from "../../img/logo.png"

export default function Auth() {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>

            <div className="a-right">
                {/* <SingUp /> */}
                <LogIn />
            </div>
        </div>
    )

    function SingUp() {
        return (
            <form className="infoForm authForm">
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder="First Name" className="infoInput" name="firstname" />
                    <input type="text" placeholder="Last Name" className="infoInput" name="lastname" />
                </div>
                <div>
                    <input type="text" placeholder="Username" className="infoInput" name="username" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="infoInput" name="password" />
                    <input type="password" placeholder="Confirm Password" className="infoInput" name="confirmpass" />
                </div>
                <div>
                    <span style={{ fontSize: "12px" }}>Already have an account? <span>Login</span></span>
                </div>
                <button type="submit" className="btn infoBtn">Signup</button>
            </form>
        )
    }

    function LogIn() {
        return (
            <form className="infoForm authForm">
                <h3>Log In</h3>
                <div>
                    <input type="text" placeholder="Username" className="infoInput" name="username" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="infoInput" name="password" />
                    <input type="password" placeholder="Confirm Password" className="infoInput" name="confirmpass" />
                </div>
                <div>
                    <span style={{ fontSize: "12px" }}>Don't you have an account? <span>Signup</span></span>
                </div>
                <button type="submit" className="btn infoBtn">Login</button>
            </form>
        )
    }
}
