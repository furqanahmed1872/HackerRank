'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) { 
    let front = 0
    let back = 0
    let end = 0
    let start = 0
    if(p === 1){
      start += 0
    }else if(p % 2 === 1){
      front += (p-1)
    }else{
      front += p
    }
    
    if((n-p) === 1 && p % 2 === 1) {
      end ++
    }else if((n-p) % 2 === 1) {
      back += ((n-p)-1)
    }else{
      back += (n-p)
    }
    start += front/2
    end += back/2
    return Math.min(start,end)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
