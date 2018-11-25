/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let inputs = readline().split(' ');
let temps = [];

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    temps.push(t);
    printErr(t)
}
printErr('===');

let lowest = 5526;
let answer = 0;

temps.map((temp) => {
    let abs = Math.abs(temp);
    let negative = !(temp == abs);
    let inverse = -1 * temp;

    if (abs <= lowest) {
        lowest = abs;
        answer = (negative && answer == inverse) ? inverse : temp;
    }


});

// Write an action using print()
// To debug: printErr('Debug messages...');

print(answer);
