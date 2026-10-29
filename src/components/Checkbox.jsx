import React, { useState } from "react";


function Checkbox() {
    const [accept, setAccept] = useState(false)
    const [select, setSelect] = useState(null)
    return (
        <div>
            <input type="checkbox"
            checked={accept}
            onChange={(e)=>setAccept(e.target.checked)}
            />
            <p>{accept ? "Accepted" : "Not accepted"}</p>
            <input type="radio"
                checked={select==="male"} value="male"
                name="gender"
                onChange={(e)=> setSelect(e.target.value)}
            /> Male

            <input type="radio"
                checked={select==="female"} value="female"
                name="gender"
                onChange={(e) => setSelect(e.target.value)}
            /> female
            
      </div>
  )
}

export default Checkbox;
