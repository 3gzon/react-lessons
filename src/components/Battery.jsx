import React from "react";

function Battery({level}) {
    
    
    return (
        <div>
             {
            level <= 20
            ? "low battery"
            : level <= 70
            ? "normal"
            : "full"
       }
       </div>
    )
}

export default Battery;
