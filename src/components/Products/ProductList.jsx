import React, { useState } from "react";
import "./Product.css"

function ProductList() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    // const [quantity, setQuantity] = useState("")
    // const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    const [products, setProducts] = useState([])
    
    const createNewProduct = (e) => {
        e.preventDefault()
        console.log('test');
        if (name.trim() === "") {
            setError("name is required")
        } else if (price === "") {
            setError("Price is required")
        } else if (category === "") {
            setError("cat is required")
        } else {
            const newProduct = {
                id: Date.now(),
                name: name,
                category: category,
                price:price
            }

            setProducts([...products, newProduct])
            
        }
        console.log(products);
    }


    return (
        <div className="app">
            <header className="header">
                <h1>Manage products</h1>
            </header>
            <main className="container">
                <div className="stats">
                    <div className="stat-card">
                        <p>Total products</p>
                        <h2>34</h2>
                    </div>
                </div>
            </main>
            <div className="card">
                <h2>Add new product</h2>
                <form onSubmit={createNewProduct}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Product name</label>
                            <input type="text"
                                id="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cat">Category</label>
                            <select
                                value={category}
                                name=""
                                id="cat"
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value="">None</option>
                                <option value="Electronic">Electronic</option>
                                <option value="School">School</option>
                            </select>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                
                                />
                            </div>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="add-btn">
                        Create new product
                    </button>
                </form>
            </div>
            <div className="card">
                <div className="products">
                    {
                        products.map((product) => (
                            <div className="product" key={product.id}>
                                <h3>{product.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
      </div>
  )
}

export default ProductList;
