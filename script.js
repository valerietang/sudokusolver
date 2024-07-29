let grid = [
           [9,8,0,0,0,0,0,0,0],
           [2,3,0,0,5,0,0,0,8],
           [0,4,0,0,0,0,0,2,0],
           [0,0,0,0,0,5,4,8,0],
           [0,0,0,3,4,0,5,0,0],
           [0,0,6,0,2,8,3,0,0],
           [0,0,8,5,7,0,0,3,0],
           [0,0,0,0,0,2,0,4,5],
           [0,0,0,0,3,0,0,6,0]
];

function getRow (grid, rowIndex){
    return grid[rowIndex];
}

//console.log(getRow(grid,0));

function getColumn(grid, colIndex) {
    let column = [];
    for (let i = 0; i < grid.length; i++) {
      column.push(grid[i][colIndex]);
    }
    return column;
  }


//console.log (getColumn(grid,0));

function getSubgrid(grid, row, col){
    let subgrid = [];
    let startRow = row - row % 3;
    let startColumn = col - col % 3;

    for (let r = 0; r < 3 ; r++){
        for (let c = 0; c < 3; c++){
            subgrid.push(grid[startRow + r][startColumn + c])
        }
    }
    return subgrid;
}

//console.log(getSubgrid(grid,0,0))


function checkValid (grid,row,col,num){
    if (getRow(grid,row).includes(num)) return false;
    if (getColumn(grid,col).includes(num)) return false;
    if (getSubgrid(grid, row, col).includes(num)) return false;
    return true;
}

//console.log(checkValid(grid,0,0,1))


function findEmptyCell(grid) {
   for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
        if (grid[row][col]===0){
            return [row,col]; return null;
        }
    }
   }
}

//console.log(findEmptyCell(grid))

function solveSudoku(grid){
    let emptyCell = findEmptyCell(grid);
    if (!emptyCell){
        return true;
    }
    let [row,col]= emptyCell

    for (let num = 1; num <= 9; num++){
        if (checkValid(grid,row,col,num)){
            grid[row][col]= num;

            if (solveSudoku(grid)) {
                return true;
            }
            grid[row][col] = 0
        }
    }
    return false;
}
solveSudoku(grid);
grid.forEach(row => console.log(row.join(' ')));
