import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import "./style.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState([]);
  const [topic, setTopic] = useState("");
  const [signup,setSignup] =useState(null);

  const handleSignup = async () => {
      const user = await axios.post("http://localhost:3002/users",{
          Name:name,
          Age:age,
          Location:place,
          Topic:topic
      })
      .then((res)=>{
        setSignup(res.user)
      })
  };
  return (
    <>
      <div className="container">
          <h2>SignUp Form</h2>
        <form onSubmit={handleSignup} value={signup}>
          <label>Name</label>
          <br/>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label>Age</label>
          <br/>
          <input
            type="number"
            placeholder="enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <br />
          <label>Location</label>
          <br/>
          <input
            type="text"
            placeholder="enter your City"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          ></input>
          <br />
          <label>Interested in?</label>
          <br/>
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          ></input>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
