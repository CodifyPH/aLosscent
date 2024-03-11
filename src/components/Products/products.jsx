import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css"; // Import your CSS file

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data); // Assuming your data is in the 'data' property of the response
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <br />
      <br />
      <h1>Products Gallery</h1>
      <div className="ProductGallery"> {/* Updated class name */}
        {products.map((product) => (
          <div key={product.id} className="ProductCard"> {/* Updated class name */}
            <img src={product.cover} alt="" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>Gender: {product.gender}</p>
            <p>Pesos: {product.price}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
     {/* Footer */}
     <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <p>Email: Holycowramralph@gmail.com</p>
            <p>Phone: 09457063193</p>
            <p>Address: Brgy 24, Rizal Street, Legazpi City</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-facebook-48.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-instagram-48.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-twitterx-50.png" alt="X" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-whatsapp-48.png" alt="Whatsapp" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/icons8-tiktok-48.png" alt="Tiktok" />
            </a>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/products">Products</a></li>
              {/* <li><a href="/signup">Sign Up</a></li> */}
            </ul>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, natus. Quia, sint corrupti quos aut facere maiores aliquid 
          cumque nostrum blanditiis nulla, accusantium quis explicabo unde consectetur minus non nesciunt.
        </p>
      </footer>
    </div>
  );
}

export default Products;
