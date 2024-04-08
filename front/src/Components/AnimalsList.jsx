import React from "react";
import Animal from "./Animal";

const AnimalsList = ({ animalList, handleDelete, setshowID }) => {
  return (
    <div>
      {animalList.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          handleDelete={handleDelete}
          setshowID={setshowID}
        />
      ))}
    </div>
  );
};

export default AnimalsList;
