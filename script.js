var anoLetivo = 0
var mediaEscolar = 0
function createInputNote() {
    var periodosHTML = document.getElementById("periodos")
    var divEntrada = document.querySelector("#entrada")
    var divProcesso = document.querySelector("#processo")
    mediaEscolar = Number(document.querySelector("#mediaEscolar").value)
    divProcesso.innerHTML = ''//Limpa a div onde se insere os valores da nota

    var periodos = periodosHTML.value

    periodos == false ? window.alert("Informe a quantidade de períodos") :mediaEscolar== false? window.alert("Informe a média") : periodosTrue()

    function periodosTrue() {
        divProcesso.classList.add("divs")
        for (var i = 0; i < periodos; i++) {
            divProcesso.innerHTML += `<p>Nota: <input type="number" id="nota${i + 1}" name="" id="nota" class="inputs"></p> `

        }
        divProcesso.innerHTML += `<input type="button" value="Analisar" onclick="main()" class="botao">`
    }
    anoLetivo = periodos
    

}

function main() {
    var qtdNotas = anoLetivo
    var notas = []
    var resultado = document.querySelector("#processo")

    for (var j = 1; j <= qtdNotas; j++) {
        notas.push(Number(document.querySelector(`#nota${j}`).value))
    }

    var total = 0

    notas.forEach((nota) => {
        total += nota
    })
    var media = (total / notas.length).toFixed(2)
    var acimaDaMedia = `<p>Parabéns sua média foi de ${media} e com isso você passou de ano.</p>`
    var abaixoDaMedia = `<p>Infelizmente sua média foi de ${media} e não atingiu a pontuação necessária de ${mediaEscolar} para passar de ano</p>`
    media >= mediaEscolar ? resultado.innerHTML += acimaDaMedia : resultado.innerHTML += abaixoDaMedia

}