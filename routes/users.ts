import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

export default router;