import React,{useState} from "react";
import './adduser.css'

function Adduserpage() {
    return (
<>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <form>
    <h2 className="heading">Add user</h2>
  <label htmlFor="first_name">First Name:</label>
  <input type="text" id="first_name" name="first_name" required="" />
  <label htmlFor="last_name">Last Name:</label>
  <input type="text" id="last_name" name="last_name" required="" />
    <label htmlFor="email">Email Id:</label>
    <input type="email" id="login_email" name="login_email" required="" />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="login_password"
      name="login_password"
      required=""
    />
    <button   className="but_user" type="button">
      SUBMIT
    </button>
  </form>
</>
    )

}
export default Adduserpage;