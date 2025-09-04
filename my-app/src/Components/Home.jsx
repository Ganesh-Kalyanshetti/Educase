import { useNavigate } from "react-router-dom";
import '../Styles/home.css'

function Home() {

    const navigate = useNavigate();
    return (
        <>
            <div className="Dashboard">
                <div className="msg">

                <h2>Welcome to PopX</h2>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

            <button  className="regbtn" onClick={()=>navigate("/register")}>Create Account</button>
            <button  className="loginbtn"  onClick={()=>navigate("/login")}>Already Registered? Login</button>
                </div>
            </div>
        </>
    )
}

export default Home;