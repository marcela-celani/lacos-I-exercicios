// exercício II

const tabuada = (numero) => {
    for(i = 1; i <= 10; i++){
        let produto = numero * i
        console.log(`${numero} x ${i} = ${produto}`)
    }
}

const numeroUsuario = Number(prompt('Digite um numero: '))
tabuada(numeroUsuario)