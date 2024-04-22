import express from "express";
import cors from "cors";
import userRoutes from "./routes/users";



const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', 
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", userRoutes);

app.listen(8900);