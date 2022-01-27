import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css";


export default function Register() {

  const [lawyer_Id, setLawyer_Id] = useState("")
  const [lawyer_Name, setLawyer_Name] = useState("")
  const [img, setImg] = useState("")
  const [service, setService] = useState("")
  const [date, setDate] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  let NewLawyer = { lawyer_Id: lawyer_Id, lawyer_Name: lawyer_Name, img: img, service: service, date: date, email: email, phone: phone, address: address }


  function handleLawyer_Id(event) {
    setLawyer_Id(event.target.value);
  }
  function handleLawyer_Name(event) {
    setLawyer_Name(event.target.value);
  }
  function handleImg(event) {
    setImg(event.target.value);
  }
  function handleService(event) {
    setService(event.target.value);
  }
  function handleDate(event) {
    setDate(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleAddress(event) {
    setAddress(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }



  function handleClick() {
    console.log("insid function");
    axios({
      method: "post",
      url: "/api/lawyers/add",
      data: NewLawyer
    });
    console.log(" after post ");
    console.log(NewLawyer);
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
            <input type="text" class="input-field" placeholder='Enter Your Name' onChange={handleLawyer_Name} required />
            <label class="input-label"> UserName</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" placeholder='Put Your URL Photo' onChange={handleImg} required />
            <label class="input-label"> Photo</label>
          </div>
          <div class="input">
            <select placeholder=" Service " onChange={handleService} required >
              <option >Choose Your Service </option>
              <option value="Solutions">Solutions</option>
              <option value="Arbitration" >Arbitration</option>
              <option value="Pleadings" >Pleadings</option>
            </select>
          </div>
          <div class="input">
            <input type="text" class="input-field" placeholder='Enter Your Email' onChange={handleEmail} required />
            <label class="input-label">  Email</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" placeholder='Enter Your Phone' onChange={handlePhone} required />
            <label class="input-label">  Phone</label>
          </div>
          <div class="input">
            <input type="text" class="input-field" placeholder='Enter Your Date' onChange={handleDate} required />
            <label class="input-label"> Date</label>
          </div>
          <div class="input">
            <input type="text"  class="input-field" placeholder='Enter Your Address' onChange={handleAddress} required />
            <label class="input-label"> Address</label>
          </div>
          <div class="action">
            <button onClick={handleClick} class="action-button">Submit</button>
          </div>
        </form>
        <div class="card-info">
          <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
        </div>
      </div>
    </div>
  );
}
