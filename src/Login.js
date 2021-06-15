import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const formPage = () => {
    let path = `/Form`;
    history.push(path);
  };

  const LoginPage = () => {
    let path = `/Table`;
    history.push(path);
  };

  return (

    
    <div className="Login">
      <h1 className="LoginHead">Aspire info labs</h1>
      <div>
      <label className="LoginUser"></label><br/>
      <input className="LoginUserBox " type="text" placeholder="Email/Username" />

      <br/>
      <input  className="LoginUserBox " type="password" placeholder="Password" />
      
      <br />
      <br />
      <button className="LoginButton" onClick={LoginPage}>
        Log in
      </button>
      <br />
      <br />
      <label className="Nu">New user click here</label>
      <button className="NewUserBtn" onClick={formPage}>
        Click Me
      </button>
      </div>
    </div>
  );
}
