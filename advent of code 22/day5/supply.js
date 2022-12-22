const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");

const moveCrates = (input) => {
    const configuration = input.split('\n\n')[0];
    const instructions = input.split('\n\n')[1].split('\n');
    
    const configArray = configuration.split('\n')
    const rows = configArray[configArray.length - 1].split(' ').filter(el=>el!=='')
    const rowsNumber = rows[rows.length - 1]

    let stacks = [];
    let columns = [];

    //parse stacks
    for (let i = 0; i < rowsNumber; i++) {
        stacks[i] = [];
        columns[i] = [];
    }
    for (let i = rowsNumber - 1; i>=0; i--) {
        const blocks = configArray[i].split('    ')//.filter(el=>el!=='')
            for (let j = 0; j < blocks.length; j++) {
                // console.log(blocks[j])
                // stacks[i].push(blocks[j])
            }
        console.log(blocks)
    }
    // console.log(stacks)

    //pivot stacks to columns
    for (let k = 0; k<rowsNumber; k++) {
        const row = stacks[k];
        for (let l = 0; l<rowsNumber; l++) {
            // if (row[l]) { // if block exists 
            columns[l].push(row[l])
            // }
        }
    }
    // console.log(columns)
    //parse instructions
    for (const instruction of instructions) {
        const splitInstruction = instruction.split('\n').toString().split(' ');
        //move 1 from 2 to 1 
        //1 crate is moved from stack 2 to stack 1
        const movedAmount = splitInstruction[1]
        const currentColumn = splitInstruction[3]
        const targetColumn = splitInstruction[5]

        let movedBlocks = [];
        // for (let i = 1; i < movedAmount; i++) {
        //     let shiftedBlock = columns[currentColumn].shift()
        //     console.log(shiftedBlock)
        // }
        // columns[1].shift()

    }

}

moveCrates(fileContent)
