class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set();
        
        for(let i = 0; i<9; i++){
            for(let j = 0; j < 9; j++){
                const value = board[i][j];
                if(value === '.')   continue;
                const rowKey = `${value} in row ${i}`;
                const colKey = `${value} in col ${j}`;
                const boxKey = `${value} in ${Math.floor(i/3)}-${Math.floor(j/3)}`;
                if(set.has(rowKey)||set.has(colKey)||set.has(boxKey)) return false;
                set.add(rowKey);
                set.add(colKey);
                set.add(boxKey);
            }
        }
            return true;
    }
}
