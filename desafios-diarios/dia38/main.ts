function jokenpo(p1: string, p2: string) {
    let winner: number = 0
    const validEntry: Array<string> = ["rock", "paper", "scissors"]

    const player1: string = p1.toLowerCase()
    const player2: string = p2.toLowerCase()

    if (validEntry.includes(player1) && validEntry.includes(player2)) {
        if (player1 === player2) {
            return winner
        } else if (player1 === "rock" && player2 === "scissors") {
            return winner = 1
        } else if (player1 === "scissors" && player2 === "paper") {
            return winner = 1
        } else if (player1 === "paper" && player2 === "rock") {
            return winner = 1
        } else {
            return winner = 2
        }
    } else {
        return winner = -1
    }
}



