// Shop.jsx
import React, { useState } from 'react';
import './Shop.css';  

function Shop() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const clickMe = () => {
    setShowComingSoon(!showComingSoon);
  };

  return (
    <div className="shop-container">
      <h1>Shop Page</h1>
      <div className={`coming-soon ${showComingSoon ? 'visible' : 'hidden'}`}>
        <h2>"This website is currently under construction. However, we have a physical store. Please contact us for more details."</h2>
      </div>
      <button onClick={clickMe}>CLICK ME!</button>
    </div>
  );
}



export default Shop;
