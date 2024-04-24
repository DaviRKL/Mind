import { db } from "../db";
import { Request, Response } from "express";
import multer from "multer";

export const getProdutos = (req:Request, res:Response) => {
    const q = "SELECT * FROM produtos"

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantenha o nome original do arquivo
    }
});
const upload = multer({ storage: storage });

export const addProduto = (req: any, res: any) => {
   

        // Verifique se req.file está definido antes de acessar suas propriedades
        if (!req.file) {
            return res.status(400).json({ message: "Nenhum arquivo foi enviado" });
        }

        // Agora você pode acessar o nome do arquivo usando req.file.filename
        const q = "INSERT INTO produtos (Nome, Descricao, Imagem, Valor, Qtd) VALUES (?, ?, ?, ?, ?)";
        const values = [
            req.body.Nome,
            req.body.Descricao,
            req.file.filename, 
            req.body.Valor,
            req.body.Qtd,
        ];

        db.query(q, values, (err: any) => {
            if (err) return res.json(err);

            return res.status(200).json("Produto criado com sucesso");
        });
 
};



export const updateProduto = (req:any,res:any) => {
    const q = "UPDATE produtos SET Nome = ?, Descricao= ?,  Imagem= ? Valor= ? Qtd= ?  WHERE id = ?";
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

export const deleteProduto = (req:any,res:any) => {
    const q = "DELETE FROM produtos WHERE id = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso");
    })
};

export const viewProduto = (req:Request,res:Response) => {
    const q = "SELECT * FROM produtos WHERE id = ?"

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
};

