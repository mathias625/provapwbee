const express = require ("express");
const router = express.Router();

const produtosvendidosController = require("../controllers/produtosvendidos.controller");

router.get("/produtosvendidos", produtosvendidosController.listar);
router.get("/produtosvendidos/:id", produtosvendidosController.buscar);
router.post("/produtosvendidos", produtosvendidosController.cadastrar);
router.delete("/produtosvendidos/:id", produtosvendidosController.apagar);
router.put("/produtosvendidos/:id", produtosvendidosController.alterar);
router.patch("/produtosvendidos", produtosvendidosController.atualizar);

module.exports = router;