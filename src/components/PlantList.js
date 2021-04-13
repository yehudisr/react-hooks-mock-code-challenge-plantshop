import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete}) {

  const plantCollection = plants.map(plant => <PlantCard key={plant.id} plant={plant} onDelete={onDelete}/>)
  return (
    <ul className="cards">{plantCollection}</ul>
  );
}

export default PlantList;
