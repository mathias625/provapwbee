const registrarpedidos = require("../data/registrarpedidos.data");

const listar = (req, res) => {
    res.status(200).send(registrarpedidos).end();
};

const buscar = (req, res) => {

    const statusRegistrarpedidos = req.params.id;

    var user = ("não encontrado");

    registrarpedidos.forEach((registrarpedidos, index) => {
        if(registrarpedidos.id === statusRegistrarpedidos){
            user = registrarpedidos;
        }
    });
    res.send(user).end();
};


const cadastrar = (req, res) => {
    const novoregistrodecompra = req.body;
    registrarpedidos.push(novoregistrodecompra);
    res.status(201).send("Seu pedido foi cadastrado com sucesso!").end();
};

const apagar = (req, res) => {
    const statusRegistrarpedidos = req.params.id;

    var indice = -1

    registrarpedidos.forEach((registrarpedidos, index) => {
        if(registrarpedidos.id === statusRegistrarpedidos) {
            indice = index;

        };
    });

    if(indice === -1){
        res.status(404).end;
    }
    else{
        registrarpedidos.splice(indice, 1);
        res.status(204).end();
    }

};

    const alterar = (req, res) => {
        const StatusAlterados = req.body;
        var econtrei= false;
        
        registrarpedidos.forEach((registrarpedidos, index) => {
            if(registrarpedidos.id === StatusAlterados.id){
                registrarpedidos[index] = StatusAlterados;
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
        const StatusAlterados = req.params.id;
        const novosstatus = req.body;

        var indice = -1

        registrarpedidos.forEach((registrarpedidos, index) => {
            if(registrarpedidos.id === StatusAlterados) indice = index;
        });
        if(indice === -1) {
            res.status(404).end();
        }
        Object.keys(novosstatus).forEach((key) => {
            registrarpedidos[indice][key] = novosstatus [key];
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