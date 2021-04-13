import React, {useState} from "react";

function PlantCard({plant, onDelete}) {
  const [inStock, setInStock] = useState(true)
  const {id, name, image, price} = plant

function handleInStock(){
 setInStock(!inStock)
}

function deleteOnClick (){
 
  fetch(`http://localhost:6001/plants/${id}`, {
   method: "DELETE",
 })
   .then((r) => r.json())
   .then((data) => { 
     onDelete(plant)
   })

}


  return (
    <li className="card">
      <button onClick={deleteOnClick} className="plant-delete-button">x</button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
