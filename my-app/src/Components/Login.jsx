
import { useNavigate } from "react-router-dom"
import '../Styles/login.css'

function Login()
{
    const navigate= useNavigate();
    return(
        <>
        <div className="dashboard">
            <h1>Signin to your <br /> PopX account</h1>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
            <br />
            <div className="input-box">
                <fieldset>
                    <legend>Email Address</legend>
                    <input type="email" placeholder="Enter email address" />
                </fieldset>
            </div>

            <div className="input-box">
                <fieldset>
                    <legend>Password</legend>
                    <input type="password" placeholder="Enter password"  />
                </fieldset>
            </div>

            <br />

            <button onClick={()=>navigate("/profile")} className="loginbtns">
                Login
            </button>
        </div>
        </>
    )
}
export default Login;