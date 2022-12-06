// The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?


const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");

const shapes = { rock: 1, paper: 2, scissors: 3};
const outcome = { win: 6, draw: 3, lose: 0}

function calculateOutcome(input) {
    let arr = input.split('\n')
    let score = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let player1 = arr[i][0]
        let player2 = arr[i][2]
        let currentScore = calculateWinner(player1, player2);
        score += currentScore
    }
    console.log(score)
}

//Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.
// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
function calculateWinner(player1, player2) {
    const { rock, paper, scissors } = shapes
    const { win, draw, lose } = outcome

    if (player1 == 'A') { //Rock
        if (player2 == 'X') { //Lose (+0) => Scissors(+3)
            return lose + scissors
        }
        if (player2 == 'Y') { //Draw (+3) => Rock (+1)
            return draw + rock
        }
        if (player2 == 'Z') {//Win (+6) => Paper (+2)
            return win + paper
        }
    }
    else if (player1 == 'B') { //Paper
        if (player2 == 'X') { //Lose (+0) => Rock(+1)
            return lose + rock
        }
        if (player2 == 'Y') { //Draw (+3) => Paper (+2)
            return draw + paper
        }
        if (player2 == 'Z') { //Win (+6) => Scissors (+3)
            return win + scissors
        }
    }
    else if (player1 == 'C') { //Scissors 
        if (player2 == 'X') { //Lose (+0) => Paper (+2)
            return lose + paper
        }
        if (player2 == 'Y') { //Draw (+3) => Scissors (+3)
            return draw + scissors
        }
        if (player2 == 'Z') {//Win (+6) => Rock(+1)
            return win + rock
        }
    }
}


calculateOutcome(fileContent);
