import React, {useState} from "react";

function PlantCard({plant}) {
  const{name, image, price} = plant
  const[inStock, setStock] = useState(true);

  function stockClick(){
    setStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick={stockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={stockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
