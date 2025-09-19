const express = require ("express");
const router = express.Router();



const registrarpedidosController = require("../controllers/clientes.controller");

router.get("/registrarpedidos", registrarpedidosController.listar);
router.get("/registrarpedidos", registrarpedidosController.buscar);
router.post("/registrarpedidos", registrarpedidosController.cadastrar);
router.delete("/registrarpedidos", registrarpedidosController.apagar);
router.put("/registrarpedidos", registrarpedidosController.alterar);
router.patch("/registrarpedidos/:id", registrarpedidosController.atualizar);

module.exports = router;