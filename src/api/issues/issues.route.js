import express from 'express';
const router = express.Router();

import db from '../dbconnection.js';

// add record
router.post("/", (req, res) => {
  const { label, status, priority } = req.body;

  db.none("INSERT INTO issues (label, status, priority) VALUES ($1, $2, $3)", 
    [label, status, priority])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(405);
    });
});

// get all records
router.get("/", (req, res) => {
  db.any('select id, label, status, priority from issues', [])
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);

      res.sendStatus(404);
    });
});

// get a particular record
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.one("select label, status, priority from issues where id = $1", [id])
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);

      res.sendStatus(404);
    });
});

export default router;
