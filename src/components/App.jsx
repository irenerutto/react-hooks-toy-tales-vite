import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // Controls whether the form is visible or hidden
  const [showForm, setShowForm] = useState(false);
  // Stores all toys fetched from backend
  const [toys, setToys] = useState([]);
// Toggles form visibility when "Add a Toy" button is clicked
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

 // Fetch all toys from backend when app loads
  useEffect(() => {
    fetch("http://localhost:6001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <>
      <Header />

      {showForm ? (
        <ToyForm toys={toys} setToys={setToys} />
      ) : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;