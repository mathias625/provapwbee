const produtosvendidos = require("../data/produtosvendidos.data");

const listar = (req, res) => {
    res.status(200).send(produtosvendidos).end();
};

const buscar = (req, res) => {

    const idProdutosvendidos = req.params.id;

    var user = ("não encontrado");

    produtosvendidos.forEach((produtosvendidos, index) => {
        if(produtosvendidos.id === idProdutosvendidos){
            user = produtosvendidos;
        }
    });
    res.send(user).end();
};


const cadastrar = (req, res) => {
    const novopreço = req.body;
    produtosvendidos.push(novopreço);
    res.status(201).send("Seu preço novo foi registrado!").end();
};

const apagar = (req, res) => {
    const idProdutosvendidos = req.params.id;

    var indice = -1

    produtosvendidos.forEach((produtosvendidos, index) => {
        if(produtosvendidos.id === idProdutosvendidos) {
            indice = index;

        };
    });

    if(indice === -1){
        res.status(404).end;
    }
    else{
        produtosvendidos.splice(indice, 1);
        res.status(204).end();
    }

};

    const alterar = (req, res) => {
        const PreçoAlterado = req.body;
        var econtrei= false;
        
        produtosvendidos.forEach((produtosvendidos, index) => {
            if(produtosvendidos.id === PreçoAlterado.id){
                produtosvendidos[index] = PreçoAlterado;
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
        const QuantidadeAlterada = req.params.id;
        const Novaqunatidadealterada = req.body;

        var indice = -1

        produtosvendidos.forEach((produtosvendidos, index) => {
            if(produtosvendidos.id === QuantidadeAlterada) indice = index;
        });
        if(indice === -1) {
            res.status(404).end();
        }
        Object.keys(Novaqunatidadealterada).forEach((key) => {
            produtosvendidos[indice][key] = Novaqunatidadealterada [key];
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