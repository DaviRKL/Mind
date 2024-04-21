import { db } from "../db";
import { Request, Response } from "express";

export const getUsers = (req:Request, res:Response) => {
    const q = "SELECT * FROM usuarios"

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req:any,res:any) => {
    const q = "INSERT INTO usuarios(Nome, Email, Senha) VALUES (?)"

    const values = [
        req.body.Nome,
        req.body.Email,
        req.body.Senha,  
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso");
    })
};

export const updateUser = (req:any,res:any) => {
    const q = "UPDATE usuarios SET Nome = ?, Email= ?, Senha= ? WHERE id = ?";
    const values = [
        req.body.Nome,
        req.body.Email,
        req.body.Senha,  
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso");
    })
};

export const deleteUser = (req:any,res:any) => {
    const q = "DELETE FROM usuarios WHERE id = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    })
};