import React from "react";
import { useState } from "react";

const SortingComponent = ({ sortHandler }) => {
  const [select, setSelect] = useState("a-z");
  return (
    <header style={{ backgroundColor: "green" }}>
      <h1>Sort by:</h1>
      <select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
          sortHandler(e.target.value);
        }}
      >
        <option value="a-z">A-Z weight</option>
        <option value="z-a">Z-A weight</option>
        <option value="name_a_-">A-Z name</option>
        <option value="name_z-a">Z-A name</option>
      </select>
    </header>
  );
};

export default SortingComponent;
