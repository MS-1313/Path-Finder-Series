'use strict';

function pathFinder(maze) {
    const arrayMaze = maze.split('\n');
    const sizeTable = arrayMaze.length;
    let stack = ['0, 0'];
    let y = 0;
    let x = 0;
    let history = [];

    while (stack.length) {
        const coordinateArray = stack[0].split(', ');
        y = +coordinateArray[0];
        x = +coordinateArray[1];

        if (stack.includes(`${sizeTable - 1}, ${sizeTable - 1}`)) {
            return true;
        }

        if (history.includes(`${y}, ${x}`)) continue;

        if (y >= 0 && y < sizeTable - 1 && arrayMaze[y + 1][x] === '.' && !history.includes(`${y + 1}, ${x}`) && !stack.includes(`${y + 1}, ${x}`)) {
            stack.push(`${y + 1}, ${x}`);
        }

        if (x >= 0 && x < sizeTable - 1 && arrayMaze[y][x + 1] === '.' && !history.includes(`${y}, ${x + 1}`) && !stack.includes(`${y}, ${x + 1}`)) {
            stack.push(`${y}, ${x + 1}`);
        }

        if (x > 0 && x <= sizeTable - 1 && arrayMaze[y][x - 1] === '.' && !history.includes(`${y}, ${x - 1}`) && !stack.includes(`${y}, ${x - 1}`)) {
            stack.push(`${y}, ${x - 1}`);
        }

        if (y > 0 && y <= sizeTable - 1 && arrayMaze[y - 1][x] === '.' && !history.includes(`${y - 1}, ${x}`) && !stack.includes(`${y - 1}, ${x}`)) {
            stack.push(`${y - 1}, ${x}`);
        }

        history.push(`${y}, ${x}`);
        stack.shift();
    }

    return false;
}

console.log(`..
..`);
