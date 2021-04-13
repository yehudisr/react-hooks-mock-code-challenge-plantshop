import React, {useState} from "react";

function PlantCard({plant, onDelete, onUpdate}) {
  const {id, name, image, price} = plant
  const [inStock, setInStock] = useState(true)
  const[newPrice, setNewPrice] = useState(price)

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

function handleSubmit(e){
  e.preventDefault()


  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({price:newPrice})
  })
    .then((r) => r.json())
    .then((plant) => { 
      onUpdate(plant)
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
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="New Price" step="0.01" 
        value={newPrice} 
        onChange={(e)=> setNewPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
