import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(
    ()=>{
      fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(setPlants)
    }, 
    []
  )

 function handleAddPlant(newPlant){
   setPlants([...plants, newPlant])
 }

 const handleSearch = (e) => setSearch(e)

 const filterPlants = plants.filter(plant =>
  plant.name.toLowerCase().includes(search.toLowerCase())
)

function handleDelete(plantToDelete){
  const updatedPlants = plants.filter((plant) => plant.id !== plantToDelete.id)
      setPlants(updatedPlants)

}

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearch={handleSearch}/>
      <PlantList onDelete={handleDelete} plants={filterPlants}/>
    </main>
  );
}

export default PlantPage;
