import React, { useState } from "react";


function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setError(
            firstName === "" ? "Name is required" : ""
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <p>{error}</p>
                <input type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit">
                    Create
                </button>
            </form>
            <p>First Name: Egzon</p>
            <p>Last Name: Uka</p>
            <p>Email: test@test.com</p>
            <p>Password: *****</p>
        </>


    );
}

export default Form;
