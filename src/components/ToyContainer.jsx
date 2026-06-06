import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  return (
    <div id="toy-collection">
       {/* Loop through toys and render a ToyCard for each one */}
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} setToys={setToys} />
      ))}
    </div>
  );
}

export default ToyContainer;
