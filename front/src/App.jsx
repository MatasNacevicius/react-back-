import { useEffect, useState } from "react";
import "./App.css";
import AnimalsList from "./Components/AnimalsList";
import CreateAnimal from "./Components/CreateAnimal";
import axios from "axios";
import Modal from "./Components/Modal";
import SortingComponent from "./Components/SortingComponent";

function App() {
  const [create, setCreate] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [animalList, setAnimalList] = useState([]);
  const [show, setShow] = useState(0);
  const [edit, setEdit] = useState(null);

  // Delete
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3003/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()));
  };

  const showData = () => {
    return animalList.find((animal) => animal.id === show);
  };

  const sortHandler = (value) => {
    const copy = [...animalList];

    switch (value) {
      case "a-z":
        setAnimalList(copy.sort((a, b) => a.weight - b.weight));
        break;
      case "z-a":
        setAnimalList(copy.sort((a, b) => b.weight - a.weight));
        break;
      case "name_a-z":
        setAnimalList((animals) => {
          animals.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          return [...animals];
        });
        break;
      case "name_z-a":
        setAnimalList((animals) => {
          animals.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          });
          return [...animals];
        });
        break;
      default:
    }
  };

  // Post
  useEffect(() => {
    if (create === null) {
      return;
    }
    axios
      .post("http://localhost:3003/zoo", create)
      .then((res) => setUpdateTime(Date.now()));
  }, [create]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/zoo")
      .then((res) =>
        setAnimalList(res.data.sort((a, b) => a.weight - b.weight))
      );
  }, [updateTime]);

  // Edit
  useEffect(() => {
    if (edit === null) {
      return;
    }
    axios
      .put(`http://localhost:3003/zoo/${edit.id}`, edit)
      .then((res) => setUpdateTime(Date.now()));
  }, [edit]);

  return (
    <div className="App">
      <SortingComponent sortHandler={sortHandler} />
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setShow={setShow}
      />
      <Modal
        id={show}
        setShow={setShow}
        showData={showData}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
