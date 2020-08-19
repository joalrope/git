'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('ascii');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.on('SIGINT', _ => {
    
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
    
});

function readLine() {
    return inputString[currentLine++];
}

function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b, 0);
}

function main() {

    // console.log(process.env);

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);
    
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);
    
    ws.write(result + "\n");

    ws.end();
}
