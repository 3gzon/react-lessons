import React from "react";

function Product({productName, productColor}) {
    return (
        <div>
            <h1>{productName}</h1>
            <p>{productColor }</p>
        </div>
  )
}

export default Product;
