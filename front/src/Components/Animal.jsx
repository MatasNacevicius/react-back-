import React from "react";

const Animal = ({ animal, handleDelete, setShowID }) => {
  const { id, name, type, weight, livesInZoo } = animal;

  return (
    <div>
      <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{type}</span>
        <span>{weight}</span>
        <span>{livesInZoo}</span>
        <div>
          <button onClick={() => setShowID(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
    </div>
  );
};

export default Animal;
