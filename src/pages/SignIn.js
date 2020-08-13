import React from 'react';
import { TiUserOutline, TiLockClosedOutline } from 'react-icons/ti'
import logo from "../components/ezbank.png"
 
function SignIn() {
  return (
    <div>
    <div>
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="loginFields">
      {/* <form onSubmit={(e) => this.props.changePage(pages.CalendarPage)}> */}
        <TiUserOutline/><input type="text" placeholder="Username" />
        <hr color="white"/>
        <TiLockClosedOutline/><input type="password" placeholder="Password" />
        <hr color="white"/>
        <button type="submit">Login</button>
      {/* </form> */}
    </div>
    
    <div>
      <p>
        Don't Have an Account?
      </p>
      <button >Sign Up</button>
      <hr color="white" />
      <p>
        Or <hr color="white" />
        <a>Continue as Guest</a>
      </p>
    </div>
    
    </div>
  );
}
  
export default SignIn;