import React from "react";
import { useState } from "react";
import "./signup.css";
function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    Country: "",
  });
  const [record, setRecord] = useState([]);
  const savedData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const submited = (e) => {
    const { firstName, lastName, gender, Country } = data;
    e.preventDefault();
    const newRecord = { ...data };
    setRecord([...record, newRecord]);
    if (firstName && lastName && gender && Country) console.log(data);
    if (!firstName) {
      alert(`firstName is mandatory`);
    }
    if (!lastName) {
      alert(`lastName is mandatory`);
    }
    if (!gender) {
      alert(`gender is mandatory`);
    }
    if (!Country) {
      alert(`county is mandatory`);
    }
  };
  return (
    <div className="container">
      <form>
        <h1>Register</h1>
        <div className="divider"></div>
        <div className="ui-form">
          <div>
            <label htmlFor="">First Name:</label>
            <input
              name="firstName"
              placeholder="Enter first name"
              required
              value={data.firstName}
              onChange={savedData}
            />
          </div>
          <div>
            <label htmlFor="">Last Name:</label>
            <input
              name="lastName"
              placeholder="Last first name"
              required
              value={data.lastName}
              onChange={savedData}
            />
          </div>
          <div>
            <div
              className="Gender"
              required
              value={data.gender}
              onChange={savedData}
            >
              <input type="radio" value="Male" name="gender" required /> Male
              <input type="radio" value="Female" name="gender" required />
              Female
              <input type="radio" value="Other" name="gender" required /> Other
            </div>
          </div>
          <div>
            <label htmlFor="">Country:</label>
            <input
              name="Country"
              placeholder="Country"
              required
              value={data.Country}
              onChange={savedData}
            />
          </div>
        </div>
        <button onClick={submited}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
