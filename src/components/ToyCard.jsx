import React from "react";

function ToyCard({ toy, setToys }) {
   // Increases likes for a toy (PATCH request)
  function handleLike() {
    fetch(`http://localhost:6001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys((prev) =>
          prev.map((t) => (t.id === updatedToy.id ? updatedToy : t))
        );
      });
  }
  // Deletes a toy from backend and removes it from UI
  function handleDelete() {
    fetch(`http://localhost:6001/toys/${toy.id}`, {
      method: "DELETE"
    }).then(() => {
      setToys((prev) => prev.filter((t) => t.id !== toy.id));
    });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img src={toy.image} alt={toy.name} />

      <p>{toy.likes} Likes </p>

      <button className="like-btn" onClick={handleLike}>
        Like &lt;3
      </button>
         {/* Delete button */}
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
