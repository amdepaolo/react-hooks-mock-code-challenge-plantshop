import React, {useState} from "react";

function NewPlantForm({onPlantSubmit}) {
  const [plantForm, setPlantForm] = useState({
    name: '',
    image: '',
    price: null
  })

  function handleFormChange(e){
    const updatedForm={
      ...plantForm,
      [e.target.name]: e.target.value};
    setPlantForm(updatedForm);
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(plantForm)
    })
    .then(r => r.json())
    .then(newPlant => onPlantSubmit(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFormChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleFormChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleFormChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
