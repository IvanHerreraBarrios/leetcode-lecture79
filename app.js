var closedIsland = function(grid) {
    let numIslands = 0
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[i].length; j++){
            const cell = grid[i][j]
            if(cell === 0){
                numIslands += markIsland(grid, i, j)
            }
        }
    }
    return numIslands
};

function markIsland(grid, i, j){
    const cell = grid[i][j]
    if (cell === 1 || cell === 2) {
        return 1
    }

    if(i === 0 
    || j === 0
    || i === grid.length - 1 
    || j === grid[i].length - 1){
        return 0
    }

    grid[i][j] = 2

    return markIsland(grid, i - 1, j) *
            markIsland(grid, i + 1, j) *
            markIsland(grid, i, j - 1) *
            markIsland(grid, i, j + 1)
}