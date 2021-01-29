import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

import api from './api/index.js';
import { notFound, errorHandler } from './middlewares/errors.middleware.js';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: '📦 Svelte Express Boilerplate 📦' 
  });
});

app.use('/api/v1', api);

export default app;
