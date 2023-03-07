// exercicio III

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

const rankingPaises = () => {
    for (let i = 0; i < maioresPaises.length; i++) {
        console.log(`${i + 1}º - ${maioresPaises[i]}`)
    }
}

rankingPaises(maioresPaises)