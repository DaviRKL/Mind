import { db } from "../db";
import { Request, Response } from "express";

export const getUsers = (req:Request, res:Response) => {
    const q = "SELECT * FROM usuarios"

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};