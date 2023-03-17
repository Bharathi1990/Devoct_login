import React from "react";
 import "./Loginform.css";
 import Logo from "../images/devoct logo.png"



const  LoginForm =()=>{
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return(
        <div className="cover">
            <img className="logo" src={Logo} alt="logo"></img>
           <h1 className="welcome">Welcome Back<span className="symbol">!</span></h1>
           <h3 className="login">Log in</h3>
           <form className="form">
            <input className="email" type="email" placeholder=" Email" ></input>
            <input className="password" type="Password" placeholder=" Password"></input>
            <input className="checkbox" type="checkbox" onChange={handleChange} /> <span className="checkbox1">Remember me </span>
             <span className="forgot">Forgot password?</span>
             <button className="btn" type="submit" >Log in</button>
             <p className="account">Don’t have an account?</p>
             <span className="createacct">Create Account</span>
        <circle className="ellipse1"></circle>
        <ellipse className="ellipse2"></ellipse>
       
       
           </form>
           
        </div>
    )
}
export default LoginForm;