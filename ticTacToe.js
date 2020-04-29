
let upper = " 7  |  8  |  9 "
let middle = " 4  |  5  |  6 "
let lower = " 1  |  2  |  3 "

function drawBoard() {
    console.log(" ");
    console.log(upper);
    console.log("---------------");
    console.log(middle);
    console.log("---------------");
    console.log(lower);
    console.log(" ");
    console.groupEnd();
};


drawBoard()

function checkForWin() {
    if 
    ((upper[1] == 'O' && upper[7] == 'O' && upper[13] == 'O') || 
    (middle[1] == 'O' && middle[7] == 'O' && middle[13] == 'O') ||
    (lower[1] == 'O' && lower[7] == 'O' && lower[13] == 'O') ||
    (upper[1] == 'O' && middle[1] == 'O' && lower[1] == 'O') ||
    (upper[7] == 'O' && middle[7] == 'O' && lower[7] == 'O') ||
    (upper[13] == 'O' && middle[13] == 'O' && lower[13] == 'O') ||
    (upper[1] == 'O' && middle[7] == 'O' && lower[13] == 'O') ||
    (lower[1] == 'O' && middle[7] == 'O' && upper[13] == 'O')) 
    {
        console.log('winner')
    } else if 
    ((upper[1] == 'X' && upper[7] == 'X' && upper[13] == 'X') || 
    (middle[1] == 'X' && middle[7] == 'X' && middle[13] == 'X') ||
    (lower[1] == 'X' && lower[7] == 'X' && lower[13] == 'X') ||
    (upper[1] == 'X' && middle[1] == 'X' && lower[1] == 'X') ||
    (upper[7] == 'X' && middle[7] == 'X' && lower[7] == 'X') ||
    (upper[13] == 'X' && middle[13] == 'X' && lower[13] == 'X') ||
    (upper[1] == 'X' && middle[7] == 'X' && lower[13] == 'X') ||
    (lower[1] == 'X' && middle[7] == 'X' && upper[13] == 'X')) 
    {
        console.log('Chicken Dinner!')
    }
    else {
        console.log('NOPE')
    }
}

checkForWin()

