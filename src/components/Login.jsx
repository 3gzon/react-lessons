import React, {useState} from "react";

function Login() {
    const [ login, setLogin] = useState(false)
    return(
        <div>
            <button onClick={() => setLogin(!login)} >
                {login ? "Log out" : "log in"}
            </button>
            
            <p>
                {login ? "welcome" : " please log in" }
            </p>
            </div>
        )
}

export default Login;
