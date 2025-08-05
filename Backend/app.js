
import cors from 'cors';
import express from 'express';

const app = express();


app.use(cors());
app.use(express.json());

import userRoutes from './src/routes/userRoutes.js';
import leaderboardRoutes from './src/routes/leaderboardRroutes.js';

app.use('/api/v1', userRoutes);
app.use('/api/v1', leaderboardRoutes);

export  {app};