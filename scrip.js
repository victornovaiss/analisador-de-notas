function adcnotas(){ //Função que é chamada quando o usuário clica no botão 'Adicinar notas'
    
    var txtn1 = document.querySelector('input#txtn1')
    var txtn2 = document.querySelector('input#txtn2')
    var txtn3 = document.querySelector('input#txtn3')
    var txtn4 = document.querySelector('input#txtn4')
    var res = document.querySelector('div#resu')
    
    if(txtn1.value.length == 0 || conferir()){ //Função pra analisar se os dados estão válidos
        window.alert('Dados inválidos')
        res.innerHTML = `Insira dados válidos`
    } 
    
    if  (txtn2.value.length == 0){
        umanota()
    } else if (txtn3.value.length == 0){
        duasnotas()
    } else if (txtn4.value.length == 0 ){
        tresnotas()
    }else{
        quatronotas()
    }
    
    function conferir(){ //Função pra conferir se os número inseridos estão válidos
        n1 = Number(txtn1.value)
        n2 = Number(txtn2.value)
        n3 = Number(txtn3.value)
        n4 = Number(txtn4.value)

        if(n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10 && n3 >= 0 && n3 <= 10 && n4 >= 0 && n4 <= 10){
            return false
        } else {
            return true
        } 
    }
    
    function umanota(){ //Função que é chamada caso o usuário disponibilize apenas uma nota
        nota = Number(txtn1.value)
        res.innerHTML = `Sua nota foi ${nota} `
        if (nota<7 && nota >= 0 ){
            res.innerHTML += `e está abaixo da média.`
        }else if(nota == 7){
            res.innerHTML += `e está na média.`
        } else if (nota > 7 && nota <= 10){
            res.innerHTML += `e está acima da média`
        }
    }

    
    function duasnotas(){ //Função que é chamada caso o usuário disponibilize apenas 2 notas
        n1 = Number(txtn1.value)
        n2 = Number(txtn2.value)
        res.innerHTML = `<p>Nota da primeira unidade: ${n1}</p>`
        res.innerHTML +=`<p>Nota da segunda unidade: ${n2}</p>`
        res.innerHTML +=`<p>Média: ${(n1+n2)/2}</p>`
       
        if(n2<7){
            res.innerHTML +=`Sua nota da segunda unidade foi abaixo da média`
            if(n2<n1){
                res.innerHTML +=`<p>Cuidado, se continuar nesse ritmo pode perder o ano</p>`
            }else if(n2==n1){
                res.innerHTML +=`<p>Sua nota se manteve estável mas está abaixo da média</p>`
            }else{
                res.innerHTML +=`<p>Sua nota melhorou mas está abaixo da média, se esforce mais</p>`
            }
        } else if(n2==7){
            res.innerHTML +=`<p>Sua nota da segunda unidade foi na média</p>`
            if(n2<n1){
                res.innerHTML +=`<p>Cuidado, apesar de estar dentro da média tente melhorar</p>`
            }else if(n2==n1){
                res.innerHTML +=`<p>Sua nota se manteve estável</p>`
            }else{
                res.innerHTML +=`<p>Sua nota melhorou, continue assim!</p>`
            }
        } else{
            res.innerHTML +=`<p>Sua nota da segunda unidade foi acima da média</p>`
            if(n2<n1){
                res.innerHTML +=`<p>Poderia ter sido melhor, mas nada que te comprometa</p>`
            }else if(n2==n1){
                res.innerHTML +=`<p>Sua nota se manteve estável</p>`
            }else{
                res.innerHTML +=`<p>Sua nota melhorou, continue assim!</p>`
            }
        }   
    }

    function tresnotas(){ //Função que é chamada caso o usuário disponibilize apenas 3 notas
        n1 = Number(txtn1.value)
        n2 = Number(txtn2.value)
        n3 = Number(txtn3.value)
        res.innerHTML = `<p>Nota da primeira unidade: ${n1}</p>`
        res.innerHTML +=`<p>Nota da segunda unidade: ${n2}</p>`
        res.innerHTML +=`<p>Nota da terceira unidade: ${n3}</p>`
        res.innerHTML +=`<p>Média: ${(n1+n2+n3)/3}</p>`
       
        if(n2<7){
            res.innerHTML +=`Sua nota da segunda unidade foi abaixo da média`
            if(n2<n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Seu caso é crítico, estude muito ou estará em apuros!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Estude mais apesar de sua nota ter se mantido igual ainda está vermelha</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, continue assim para recuperar</p>`
                }
            }else if(n2==n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Caso esteja com dificuldade procure o professor ou estará em apuros!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Estude mais apesar de sua nota ter se mantido igual ainda está vermelha</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, mas não o suficiente!</p>`
                }
            }else{
                if(n3<n2){
                    res.innerHTML +=`<p>Está com algum problema? peça ajuda ao professor!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Estude mais apesar de sua nota ter se mantido igual ainda está vermelha</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, mas não o suficiente!</p>`
                }
            }
        } else if(n2==7){
            res.innerHTML +=`<p>Sua nota da segunda unidade foi na média</p>`
            if(n2<n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Você estava indo tão bem!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Estude mais apesar de sua nota ter se mantido igual não está livre de riscos</p>`
                }else{
                    res.innerHTML +=`<p>Muito bem! Você se recuperou, continue assim</p>`
                }
            }else if(n2==n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Opa, vc precisa recuperar sua nota na próxima unidade ou então pode ter problemas!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Está na média, cuidado na próxima unidade.</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, continue assim!</p>`
                }
            }else{
                if(n3<n2){
                    res.innerHTML +=`<p>Cuidado! sua nota caiu, estude mais.</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Estude mais apesar de sua nota ter se mantido igual ainda está vermelha</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou! Continue se esforçando</p>`
                }
            }
        } else{
            res.innerHTML +=`<p>Sua nota da segunda unidade foi acima da média</p>`
            if(n2<n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Sua nota está em queda, se precisar de ajuda fale com alguem!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Sua nota está se estabilizando, você pode se esforçar mais!</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, boa retomada!</p>`
                }
            }else if(n2==n1){
                if(n3<n2){
                    res.innerHTML +=`<p>Sua nota caiu, mesmo que não te afete tanto é bom ter cuidado!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Suas notas estão iguais, é uma boa média</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota melhorou, você está indo muito bem!</p>`
                }
            }else{
                res.innerHTML +=`<p>Sua nota melhorou, continue assim!</p>`
                if(n3<n2){
                    res.innerHTML +=`<p>Sua nota caiu, se precisar de ajuda é so falar!</p>`
                }else if(n3 == n2){
                    res.innerHTML +=`<p>Sua nota está estável, é uma boa média</p>`
                }else{
                    res.innerHTML +=`<p>Sua nota está sempre melhorando! É assim que se faz</p>`
                }
            }
        }
    }

    function quatronotas(){ //Função quando tem todas as notas
        n1 = Number(txtn1.value)
        n2 = Number(txtn2.value)
        n3 = Number(txtn3.value)
        n4 = Number(txtn4.value)
        media = (n1+n2+n3+n4)/4
        res.innerHTML = `<p>Nota da primeira unidade: ${n1}</p>`
        res.innerHTML +=`<p>Nota da segunda unidade: ${n2}</p>`
        res.innerHTML +=`<p>Nota da terceira unidade: ${n3}</p>`
        res.innerHTML +=`<p>Nota da quarta unidade: ${n4}</p>`
        res.innerHTML +=`<p>Média: ${media}</p>`

        if(media<7){
            res.innerHTML +=`Ficou abaixo da média`
        } else if(media == 7 && media < 8){
            res.innerHTML +=`Passou na matéria, mas correu riscos`
        } else {
            res.innerHTML +=`Passou com folga, parabéns!!!`
        }
    }
}





