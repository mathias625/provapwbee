const express = require ("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/clientes", clientesController.listar);
router.get("/clientes", clientesController.buscar);
router.post("/clientes", clientesController.cadastrar);
router.delete("/clientes", clientesController.apagar);
router.put("/clientes", clientesController.alterar);
router.patch("/clientes", clientesController.atualizar);

module.exports = router;