const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 3003;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const connectionToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_zoo",
});

//POST
app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO zoo_museum(name, type, weight, liveInZoo) VALUES(?, ?, ?, ?)`;

  connectionToDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.liveInZoo],
    function (err, result) {
      if (err) throw err;
      res.json({ message: "ok" });
    }
  );
});

//GET
app.get("/zoo", (req, res) => {
  const sqlQuery = `SELECT id, name, type, weight, liveInZoo FROM zoo_museum`;

  connectionToDB.query(sqlQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
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
  const sqlQuery = `UPDATE zoo_museum SET name=?, type=?, weight=?, liveInZoo=? WHERE id=?`;

  connectionToDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.liveInZoo,
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
