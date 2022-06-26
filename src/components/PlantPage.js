import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(()=> {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(arr => setPlants(arr))
  }, [])

  function handleNewPlant(newPlant){
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onPlantSubmit={handleNewPlant} />
      <Search 
        search={search}
        onSearch={setSearch}/>
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
