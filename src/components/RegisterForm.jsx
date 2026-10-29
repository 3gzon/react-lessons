import React, { useState } from "react";

function RegisterForm() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [course, setCourse] = useState("");
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            setError("Name is required")
        } 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">First Name</label>
                    <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="name"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="lastName">last Name</label>
                    <input type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        id="lastName"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="pass">Password</label>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="pass"
                    />
                </div>
                <div className="form-control">
                    {/* <label htmlFor="name">First Name</label> */}
                    <select name="" id=""
                    onChange={(e)=>setCourse(e.target.value)}
                    >
                        <option value="">Selet Course</option>
                        <option value="html">Html</option>
                        <option value="css">Css</option>
                        <option value="js">Js</option>
                    </select>
                    <p>Selected : {course}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="accept">Accept t&c</label>
                    <input type="checkbox"
                        onChange={(e) => setAccepted(e.target.checked)}
                        value={accepted}
                        id="name"
                    />
                </div>
                <p style={{color:"red"}}>{error}</p>
                <button type="submit"
                    disabled={
                        name === "" ||
                        email === "" ||
                        password === "" ||
                        lastName === "" ||
                        course === "" ||
                        accepted === false
                }
                >
                    Register
                </button>
            </form>
      </div>
  )
}

export default RegisterForm;
