const clientes = require("../data/clientes.data");

const listar = (req, res) => {
    res.status(200).send(clientes).end();
};

const buscar = (req, res) => {

    const idClientes = req.params.id;

    var user = ("não encontrado");

    clientes.forEach((clientes, index) => {
        if(clientes.id === idClientes){
            user = clientes;
        }
    });
    res.send(user).end();
};


const cadastrar = (req, res) => {
    const novoclientes = req.body;
    clientes.push(novoclientes);
    res.status(201).send("Seu cliente novo foi cadastrado!").end();
};

const apagar = (req, res) => {
    const idClientes = req.params.id;

    var indice = -1

    clientes.forEach((clientes, index) => {
        if(clientes.id === idClientes) {
            indice = index;

        };
    });

    if(indice === -1){
        res.status(404).end;
    }
    else{
        clientes.splice(indice, 1);
        res.status(204).end();
    }

};

    const alterar = (req, res) => {
        const ClientesAlterados = req.body;
        var econtrei= false;
        
        clientes.forEach((clientes, index) => {
            if(clientes.id === ClientesAlterados.id){
                clientes[index] = ClientesAlterados;
                encontrei = true;
            }
        });
        if (econtrei === false){
            res.status(404).end();
        }else{
            ReferenceError.status(201).end;
        }
        
    };

    const atualizar = (req, res) => {
        const idAlterados = req.params.id;
        const novosDados = req.body;

        var indice = -1

        clientes.forEach((clientes, index) => {
            if(clientes.id === idAlterados) indice = index;
        });
        if(indice === -1) {
            res.status(404).end();
        }
        Object.keys(novosDados).forEach((key) => {
            musica[indice][key] = novosDados [key];
        });
        res.status(204).end();
    };

    module.exports = {
        listar,
        buscar,
        cadastrar,
        apagar,
        alterar,
        atualizar
    };