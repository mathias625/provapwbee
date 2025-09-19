const express = require("express");//importa um modulo
const cors = require("cors");

const clientesroutes = require("./src/routes/clientes.routes");
const produtosvendidosroutes = require("./src/routes/produtosvendidos.routes");
const registrarpedidodosroutes = require("./src/routes/registrarpedidos.routes");


const app = express();

app.use(express.json());
app.use(cors());


app.use(clientesroutes);
app.use(produtosvendidosroutes);
app.use(registrarpedidodosroutes);


app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});