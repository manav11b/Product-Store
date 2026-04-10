import express, { request, response } from 'express';
import dotenv from 'dotenv'
import { connectdb } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

if (!process.env.MONGO_URI) {
	console.warn("Warning: MONGO_URI is not defined. Set it in your .env file.");
}

app.listen(PORT, () => {
	connectdb();
	console.log("Server started at http://localhost:" + PORT);
});

//

 