import React from "react";
import Animal from "./Animal";

const AnimalsList = ({ animalList, handleDelete, setShow }) => {
  console.log(animalList);
  return (
    <div>
      {animalList?.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          handleDelete={handleDelete}
          setShow={setShow}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
