// exercicio I

function contaCoxinha(){
    let maisCoxinhas = prompt('Deseja comer mais coxinhas? "S" para Sim e "N" para Não.').toUpperCase()

    let conta = 2.50
    let quantidade = 1
        while(maisCoxinhas === 'S'){
            quantidade = quantidade + 1
            conta = conta + 2.50
            maisCoxinhas = prompt('Deseja comer mais coxinhas? "S" para Sim e "N" para Não.').toUpperCase()
        }

    console.log(`Você consumiu: ${quantidade} coxinhas. O valor da conta é: R$ ${conta}`)
} 

contaCoxinha()