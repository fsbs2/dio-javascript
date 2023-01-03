
/* Faça um progama para calcular o valor de uma viagem.
    1 - Preco do combustível,
    2 - Gasto médio do combustível,
    3 - Distância em KM da viagem;
*/

/** Dados Fiat Cronos 2023*/
let gastoMedioAlcoolCidade = 9.1;
let gastoMedioAlcoolEstrada =  11.2;
let gastoMedioGasolinaCidade = 13;
let gastoMedioGasolinaEstrada =  15.9;


var readline = require('readline');
var resp = "";

var CLI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


multiLineCI();

async function multiLineCI() {

    const dados = {
        tipoCombustivel: await new Promise( rsl => CLI.question( "Qual combustível você irá utilizar?\n Álcool - A \n Gasolina - G\n" , ans => rsl( ans ) ) ),
        valorCombustivel: await new Promise( rsl => CLI.question( "Qual o valor do Combustível?\n" , ans => rsl( ans ) ) ),
        kmDaViagem: await new Promise( rsl => CLI.question( "Qual é a distância irá percorrer? \n" , ans => rsl( ans ) ) ),
        tipoPercurso: await new Promise( rsl => CLI.question( "O percurso será na cidade ou na estrada? \n Cidade - C \n Estrada - E\n" , ans => rsl( ans ) ) ),
        
    }
    validacoes(dados);
    calculo(dados);
    CLI.close();
}


function validacoes(dados){

    if(dados.tipoCombustivel.toUpperCase() == 'G' || dados.tipoCombustivel.toUpperCase() == 'A'){
        return
    }else{
        console.log("Tipo de combustível inválido");
        CLI.close();
    }

    if(dados.tipoPercurso.toUpperCase() == 'C' || dados.tipoPercurso.toUpperCase() == 'E'){
        return
    }else{
        console.log("Percurso inválido");
        CLI.close();
    }

};

function calculo(dados){
    let kmPorLitros;
    if(dados.tipoCombustivel == "G"){
        if(dados.tipoPercurso == "C"){
            kmPorLitros = dados.kmDaViagem/gastoMedioGasolinaCidade;
        }else{
            kmPorLitros = dados.kmDaViagem/gastoMedioGasolinaEstrada;
        }
    }else{
        if(dados.tipoPercurso == "C"){
            kmPorLitros = dados.kmDaViagem/gastoMedioAlcoolCidade;
        }else{
            kmPorLitros = dados.kmDaViagem/gastoMedioAlcoolEstrada;
        }
    }

    let valor = kmPorLitros*dados.valorCombustivel;

    console.log(`A viagem terá o valor de ${valor.toFixed(2)} reais`);
}