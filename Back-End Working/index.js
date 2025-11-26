import express from 'express';
import userRoutes from './userRoutes.js';  // Assuming you have routes for users
import './db.js';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors()); // Ensure CORS is set up correctly

// Example route for users
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log("Server is Running");
  console.log("My name is Hassan Raza");
  console.log("Today I'm doing Back-End Practice");
});