const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const connectionToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kab212_2_react_zoo",
});

//POST
app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO zoo_museum(name, type, weight, live_in_zoo) VALUES(?, ?, ?, ?)`;

  connectionToDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.live_in_zoo],
    function (err, result) {
      if (err) throw err;
      res.json({ message: "ok" });
    }
  );
});

//GET
app.get("/zoo", (req, res) => {
  const sqlQuery = `SELECT id, name, type, weight, live_in_zoo FROM zoo_museum`;

  connectionToDB.query(sqlQuery, function (err, result) {
    if (err) throw err;
    res.json({ message: "ok" });
  });
});

//DELETE
app.delete("/zoo/:id", (req, res) => {
  const sqlQuery = `DELETE FROM zoo_museum WHERE id=?`;

  connectionToDB.query(sqlQuery, [req.params.id], function (err, result) {
    if (err) throw err;
    res.json({ message: "Deleted" });
  });
});
app.put("/zoo/:id", (req, res) => {
  const sqlQuery = `UPDATE zoo_museum SET name=?, type=?, weight=?, live_in_zoo=? WHERE id=?`;

  connectionToDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.live_in_zoo,
      req.params.id,
    ],
    function (err, result) {
      if (err) throw err;
      res.json({ message: "updated" });
    }
  );
});

app.listen(port, () => {
  console.log(`listining port ${port}`);
});
