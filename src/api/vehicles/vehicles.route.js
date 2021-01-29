import express from 'express';
const router = express.Router();

import db from '../dbconnection.js';

// get a particular record
router.get("/city/:id", (req, res) => {
  const { id } = req.params;

  db.any("select vehicle_type, count from vehicles where city_id = $1", [id])
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);

      res.sendStatus(404);
    });
});

export default router;
