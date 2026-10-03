class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const boxSets: Set<string>[] = Array.from({ length: 9 }, (_, i) => new Set());
        const rowSets: Set<string>[] = Array.from({ length: 9 }, (_, i) => new Set());
        const columnSets: Set<string>[] = Array.from({ length: 9 }, (_, i) => new Set());

        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
                const item = board[rowIndex][columnIndex];
                if (item === '.') continue;
                const boxIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3);

                const isBoxInvalid = boxSets[boxIndex].has(item);
                const isRowInvalid = rowSets[rowIndex].has(item);
                const isColInvalid = columnSets[columnIndex].has(item)
                if (isBoxInvalid || isRowInvalid || isColInvalid) {
                    return false;
                }

                boxSets[boxIndex].add(item);
                columnSets[columnIndex].add(item);
                rowSets[rowIndex].add(item);
            }
        }

        return true;
    }
}

