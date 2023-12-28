import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/task.js'

dotenv.config();

// express app
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;

//routes
app.use('/api/tasks', taskRoutes)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port', PORT)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);
