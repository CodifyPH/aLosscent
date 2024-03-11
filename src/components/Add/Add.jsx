import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function Add() {
    const[product, setProduct] = useState({
        name: "",
        desc: "",
        cover: "",
        gender: "",
        price: 0

    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/products", product);
            navigate("/products");
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <form action="#" className="form">
            <h1>Add New Product</h1>
            <input type="text" placeholder="Perfume Name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="Description" name="desc" onChange={handleChange}/>
            <input type="text" placeholder="Cover" name="cover" onChange={handleChange}/>
            <input type="text" placeholder="Gender" name="gender" onChange={handleChange}/>
            <input type="number" placeholder="000.00" name="price" onChange={handleChange}/>
            <button onClick={handleClick}>ADD</button>
        </form>
    )
}

export default Add;