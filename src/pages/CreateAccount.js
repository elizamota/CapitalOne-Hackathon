import React from 'react';
import { TiUserOutline, TiLockClosedOutline } from 'react-icons/ti'

function CreateAccount() {
  return (
    <div className="container">
    <h1>Create Account</h1>
      {/* <form onSubmit={this.handleSubmit}> */}
      <input type="text" placeholder="First Name" />
        <hr color="white"/>
        <input type="text" placeholder="Last Name" />
        <hr color="white"/>
        <input type="text" placeholder="Email" />
        <hr color="white"/>
       <input type="text" placeholder="Username" />
        <hr color="white"/>
        <input type="text" placeholder="Password" />
        <hr color="white"/>
       <input type="text" placeholder="Re-enter Password" />
        <hr color="white"/>
          <button type="submit">Submit</button> 
      {/* </form> */}
    </div>
  );
}
  
export default CreateAccount;