import React, { useState } from "react";

function Password() {
    const [password, setPassowrd] = useState(false);
    return (
    < div >
            <input type={password ? "password" : "text"} />
            <button onClick={() => setPassowrd(!password)}>
                {password ? "hide" : "show"}
            </button>
            
  </div >
    )
}

export default Password;
