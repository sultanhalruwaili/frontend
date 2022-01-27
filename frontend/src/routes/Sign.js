import React, { useState } from 'react';
import axios from "axios";
import "../App.css";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert"
export default function Sign() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState("")
    const navigate = useNavigate();



    const User = { email: email , password: password, roles: "USER"};


    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function SignUp(e) {
        e.preventDefault();
        if (email == null) {
          swal("please fill out the email field")
        }
        else if (password == null) {
          swal("please fill out the password field")
        }
    
        axios({
          method: "post",
          url: "/api/user/add",
          data:
          User
    
        }).then(response => { swal(response.data) })
        
    
      }
    

    function Login() {
        axios.get('/api/user/login', { params: { email: email, password: password } })
          .then(response => {
            if (response.data == "authenticatedADMIN") {
    
              localStorage.setItem("logIn", "authenticatedADMIN");
              navigate("/Home")
    
            }
            else if (response.data == "authenticatedUSER") {
              localStorage.setItem("logIn", "authenticatedUSER");
    
              navigate("/Home")
            }
            else {
              swal("Your email or Password is invalid, Please try again")
    
            }
            let email = localStorage.getItem("email")
            console.log(email)
          }
          )
    
      }
      function deleteUser() {
        console.log("inside deleteHandler")
        console.log(email)
    
        axios.delete(`/api/user/delete/${email}`)
          .then(() => setEmail("Delete successful"));
      }

    return (

        <div class="container">

            <div class="cardSign">
                <div class="card-image">
                    <h2 class="card-heading">
                        Get started
                        <small>Let us create your account</small>
                    </h2>
                </div>
                <form class="card-form">
                    <div class="input">
                        <input type="text" onChange={handleEmail} class="input-field" placeholder='Enter Your Email' required />
                        <label class="input-label">Email</label>
                    </div>
                    <div class="input">
                        <input type="password" onChange={handlePassword} class="input-field" placeholder='Enter Your Password' required />
                        <label class="input-label">Password</label>
                    </div>
                    <div class="action">
                        <button type='button'  onClick={(e) => { Login(e) }}  class="action-button">Get started to sign in</button>
                        <br />
                        <br/>
                        <button type='submit' onClick={(e) => { SignUp(e) }} class="action-button">Get started to sign up</button>
                    </div>
                </form>
                <div class="card-info">
                    <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
                </div>
            </div>
        </div>
    );
}