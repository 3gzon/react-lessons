import React, { useState } from "react";

function Input() {
    const [name, setName] = useState("");
    return (
       <div>
            <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <p>Name : {name}</p>
      </div>
  )
}

export default Input;
