import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/db.config.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config({
    path: "./.env"
})

await connectToDb()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(cors(corsOptions))

import userRoutes from './routes/user.routes.js'
import adminRoutes from './routes/admin.routes.js'

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening at port: http://localhost:${PORT}`);
})