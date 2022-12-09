function converter(req, res){
    let valor = parseInt(req.body.lado);
    let moeda_req = req.body.moeda;
    let moeda = moeda_req.toLowerCase();
    let resultado = 0;
    if (moeda == "dolar" || moeda == "dólar"){
        resultado = converter_dolar(valor);
    }
    if (moeda == "euro"){
        resultado = converter_euro(valor);
    }
    res.json(resultado);
}

function converter_dolar(valor) {
    return valor*5.23;
}

function converter_euro(valor) {
    return valor*5.52;
}

module.exports = {
    converter
}
