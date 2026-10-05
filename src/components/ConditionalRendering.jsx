import React from "react";

function ConditionalRendering() {
    const isLoggedIn = false;
    const isAdmin = false;

    //using if else
    if (isLoggedIn) {
        return <h1>Welcome back</h1>
    }

    //ternary operator
    return (
        <div>
            {
                isAdmin ? (
                    <h2>welcome admin user</h2>
                ) : (
                    <h1>Please get the right creds</h1>
                )
            }
        </div>
    )

}

export default ConditionalRendering;
