function converter(req, res){
    let valor = req.body.valor;
    let moeda_req = req.body.moeda;
    let moeda = moeda_req.toLowerCase();
    if(!valor || !moeda_req || typeof valor != "number") {
        return res.status(400).json({erro: "insira moeda e valor"})
    }
    if(moeda != "dolar" && moeda != "dólar" && moeda != "euro"){
        return res.status(400).json({erro: "moedas aceitas: dolar e euro"})
    }
    let resultado = 0;
    if (moeda == "dolar" || moeda == "dólar"){
        resultado = converter_dolar(valor);
    }
    if (moeda == "euro"){
        resultado = converter_euro(valor);
    }
    return res.status(200).json(resultado);
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
