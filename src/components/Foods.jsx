import React from "react";
import foods from "../data/foods"
import Food from "./Food";

function Foods() {
  
    return (
        <div>
            <div>
                {
                    foods.map(food => (
                        <Food key={food.id} name={food.name} price={food.price}/>
                    ))
                }
            </div>
      </div>
  )
}

export default Foods;
