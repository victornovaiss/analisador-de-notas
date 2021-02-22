var anoLetivo = 0
var mediaEscolar = 0
function createInputNote() {
    var periodosHTML = document.getElementById("periodos")
    var divEntrada = document.querySelector("#entrada")
    var divProcesso = document.querySelector("#processo")
    mediaEscolar = Number(document.querySelector("#mediaEscolar").value)
    divProcesso.innerHTML = ''//Limpa a div onde se insere os valores da nota

    var periodos = periodosHTML.value

    periodos == false ? window.alert("Informe a quantidade de períodos") : periodosTrue()


    function periodosTrue() {
        for (var i = 0; i < periodos; i++) {
            divProcesso.innerHTML += `<p>Nota: <input type="number" id="nota${i + 1}" name="" id="nota"></p> `

        }
        divProcesso.innerHTML += `<input type="button" value="Analisar" onclick="main()">`
    }
    anoLetivo = periodos
    periodosHTML.value = ''//Limpa a input que informa a quantidade de unidades

}

function main() {
    var qtdNotas = anoLetivo
    var notas = []
    var resultado = document.querySelector("#processo")

    for(var j = 1 ;j<=qtdNotas;j++){
        notas.push(Number(document.querySelector(`#nota${j}`).value))
    }

    var total = 0

    notas.forEach((nota)=>{
         total+=nota
    })
    var media = total/notas.length

    media>=mediaEscolar?resultado.innerHTML +=`Parabéns sua média foi de ${media}. Com isso você passou de ano`:resultado.innerHTML+= `Se esforce mais :(`
    
}