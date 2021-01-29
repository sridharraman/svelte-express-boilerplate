import express from 'express';
import issues from './issues/issues.route.js';
import vehicles from './vehicles/vehicles.route.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: '🍕 Api routeee 🍕',
  });
});

// routes registration
router.use('/issues', issues);
router.use('/vehicles', vehicles);

export default router;
