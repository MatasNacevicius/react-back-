import React, { useState } from "react";
import { useEffect } from "react";

const EditAnimal = ({ setShow, showData, setEdit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [liveInZoo, setLivesInZoo] = useState(0);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setEdit({ name, type, weight, liveInZoo, id: showData.id });

    console.log(name, type, weight, liveInZoo);

    setName("");
    setType("");
    setWeight("");
    setLivesInZoo(0);
    setShow(0);
  };

  useEffect(() => {
    setName(showData.name);
    setType(showData.type);
    setWeight(showData.weight);
    setLivesInZoo(showData.liveInZoo);
  }, [showData]);

  return (
    <div>
      <h1>Edit animal record</h1>

      <form onSubmit={handleSubmitForm}>
        <label>Animal name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Animal type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Animal weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="checkbox"
          checked={liveInZoo}
          onChange={() => setLivesInZoo((doLive) => (doLive ? 0 : 1))}
        />
        <label>Does animal live in zoo</label>
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditAnimal;
