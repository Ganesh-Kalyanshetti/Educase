import React from "react";
import '../Styles/sign.css'
import { useNavigate } from "react-router-dom";

function Reg() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    navigate("/account"); 
  };

  return (
    <div className="dashboard">
      <h1>Create your <br /> PopX account</h1>

      <form className="details" onSubmit={handleSubmit}>
        <div className="input-box">
          <fieldset>
            <legend>Full Name <span style={{color:"red"}}>*</span></legend>
            <input type="text" id="fullName" name="fullName" placeholder="Marry Doe" required />
          </fieldset>
        </div>

        <div className="input-box">
          <fieldset>
            <legend>Phone number <span style={{color:"red"}}>*</span></legend>
            <input type="tel" id="phone" name="phone" placeholder="7894561230" required />
          </fieldset>
        </div>

        <div className="input-box">
          <fieldset>
            <legend>Email address <span style={{color:"red"}}>*</span></legend>
            <input type="email" id="email" name="email" placeholder="marrydoe@gmial.com" required />
          </fieldset>
        </div>

        <div className="input-box">
          <fieldset>
            <legend>Password<span style={{color:"red"}}>*</span></legend>
            <input type="password" id="password" name="password" placeholder="marryjoe#f352" required />
          </fieldset>
        </div>

        <div className="input-box">
          <fieldset>
            <legend>Company name <span style={{color:"red"}}>*</span></legend>
            <input type="text" id="company" placeholder="Popx" name="company" />
          </fieldset>
        </div>

        <p>Are you an Agency?<span style={{color:"red"}}>*</span></p>
        <div className="radio-group">
          <label>
            <input type="radio" name="agency" value="Yes" required /> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="No" required /> No
          </label>
        </div>

        <button type="submit" className="submitbtn">Create Account</button>
      </form>
    </div>
  );
}

export default Reg;
