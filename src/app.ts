import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import connectDB from './config/database';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

connectDB();

export default app;
