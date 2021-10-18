import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [age, setAge] = useState([]);
  const [topic, setTopic] = useState("");

  const handleSignup = async () => {
      const user = await axios.post("")
  };
  return (
    <>
      <div>
          <h1>SignUp Form</h1>
        <form onSubmit={handleSignup}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label>Age</label>
          <input
            type="number"
            placeholder="enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <br />
          <label>Location</label>
          <input
            type="text"
            placeholder="enter your City"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          ></input>
          <br />
          <label>Interested in?</label>
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
