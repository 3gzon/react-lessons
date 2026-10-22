import React from "react";

function Food({id,name, price}) {
    return (
        <div>
             <div key={id}>
                            <p>{name}</p>
                            <p>{price}</p>
                        </div>
        </div>
    )
}

export default Food;
