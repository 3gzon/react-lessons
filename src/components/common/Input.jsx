import React from "react";

function Input({placeholder, onChange, value}) {
    return (
        <input type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
  )
}

export default Input;
