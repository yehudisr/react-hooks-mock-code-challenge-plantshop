import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete, onUpdate}) {

  const plantCollection = plants.map(plant => <PlantCard key={plant.id} plant={plant} onDelete={onDelete} onUpdate=
    {onUpdate}/>)
  return (
    <ul className="cards">{plantCollection}</ul>
  );
}

export default PlantList;
