import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user";
import { getProdutos, addProduto, updateProduto, deleteProduto, viewProduto } from "../controllers/produto";
import multer from "multer";
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) {
        cb(null, "./imagens/");
    },
    filename: function (req:any, file:any, cb:any) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get("/", getProdutos);

router.post("/", upload.single('Imagem'), addProduto);

router.put("/:id", updateProduto);

router.delete("/:id", deleteProduto);


router.use('/imagens/:nomeImagem', express.static(path.join(__dirname, '..', 'imagens')));


router.get("/viewProduto/:id", viewProduto);

export default router;