/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
let currentThorX = parseInt(inputs[2]);
let currentThorY = parseInt(inputs[3]);
let deltaX = 0;
let deltaY = 0;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let direction = '';
    // Write an action using print()
    if (lightY < currentThorY) {
      direction = direction + 'N';
      currentThorY--;
    }
    if (lightY > currentThorY) {
      direction = direction + 'S';
      currentThorY++;
    }
    if (lightX < currentThorX) {
      direction = direction + 'W';
      currentThorX--;
    }
    if (lightX > currentThorX) {
      direction = direction + 'E';
      currentThorX++;
    }

    // To debug: printErr('Debug messages...');



    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}
