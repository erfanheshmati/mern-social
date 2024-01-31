import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  )
}
