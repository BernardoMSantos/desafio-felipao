let nickname = "Kratos, O Bom de Guerra"
let XP = 0
let rank 
let inforPlayer = [nickname , XP , rank]

while(inforPlayer[1] <= 11000) {

    switch(true) {
        case inforPlayer[1] <= 1000:
            inforPlayer[2] = "Ferro"
            break
        case inforPlayer[1] >= 1001 && inforPlayer[1] <= 2000:
            inforPlayer[2] = "Bronze"
            break
        case inforPlayer[1] >= 2001 && inforPlayer[1] <= 5000:
            inforPlayer[2] = "Prata"
            break
        case inforPlayer[1] >= 5001 && inforPlayer[1] <= 7000:
            inforPlayer[2] = "Ouro"
            break
        case inforPlayer[1] >= 7001 && inforPlayer[1] <= 8000:
            inforPlayer[2] = "Platina"
            break
        case inforPlayer[1] >= 8001 && inforPlayer[1] <= 9000:
            inforPlayer[2] = "Ascendente"
            break
        case inforPlayer[1] >= 9001 && inforPlayer[1] <= 10000:
            inforPlayer[2] = "Imortal"
            break
        case inforPlayer[1] >= 10001:
            inforPlayer[2] = "Radiante"
            break
    }

    console.log("O herói de nome" , inforPlayer[0] , "está no Rank" , inforPlayer[2])
    inforPlayer[1] += 1000
}

console.log(inforPlayer[0] + " digitou no chat : Oh meu Deus, o que eu fiz.")
