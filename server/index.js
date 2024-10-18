import express from 'express';
import cors from 'cors';
import router from './routes.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE"
}

app.use(cors(corsOptions));
app.use(express.json());

dotenv.config({ path: '.env.local' });

const mongodbUser = process.env.MONGODB_USER;
const mongodbPass = process.env.MONGODB_PASS;
const mongodbURI = `mongodb+srv://${mongodbUser}:${mongodbPass}@todo-app.4j4ck.mongodb.net/`;

mongoose
.connect(mongodbURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});