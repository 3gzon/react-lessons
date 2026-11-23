import React from "react";

function Button({text, onClick, color}) {
    return (
        <button
            onClick={onClick}
            style={{background:color}}
        >
            {text}
      </button>
  )
}

export default Button;
