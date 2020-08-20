'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.on('SIGINT', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    let plusCount = 0;
    let minuCount = 0;
    let zeroCount = 0;
    let arrlen = arr.length;

    for (let i = 0; i < arrlen; i++) {
        
        if (arr[i] > 0) {
            plusCount += 1;
        } else if (arr[i] < 0) {
            minuCount += 1;
        } else {
            zeroCount += 1;
        }
        
    }

    let plusRatio = (plusCount / arrlen).toFixed(8);
    let minuRatio = (minuCount / arrlen).toFixed(8);
    let zeroRatio = (zeroCount / arrlen).toFixed(8);
    
    process.stdout.write(`${plusRatio} \n`);
    process.stdout.write(`${minuRatio} \n`);
    process.stdout.write(`${zeroRatio} \n`);
    
}


function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
