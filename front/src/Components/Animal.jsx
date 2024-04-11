import React from "react";

const Animal = ({ animal, handleDelete, setShow }) => {
  const { id, name, type, weight, liveInZoo } = animal;

  return (
    <div>
      <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{type}</span>
        <span>{weight}</span>
        <span>{liveInZoo}</span>
        <div>
          <button onClick={() => setShow(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
    </div>
  );
};

export default Animal;
