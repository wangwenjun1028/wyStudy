/**
 *  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]
 *  输出：[1,2,3,6,9,8,7,4,5]
 * 
*/
const input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
const spiralOrder = arr => {
    const result = [];
    //行列
    const rows = input.length, cols = input[0].length
    //输出数组总长度
    const total = rows * cols
    //顺时针旋转
    const visited = new Array(rows).fill(0).map(item => new Array(cols).fill(false))
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let currentIndex = 0, currentRow = 0, currentCol = 0
    for (let i = 0; i < total; i++) {
        result.push(arr[currentRow][currentCol])
        visited[currentRow][currentCol] = true
        let nextRow = currentRow + directions[currentIndex][0]
        let nextCol = currentCol + directions[currentIndex][1]
        if (!(nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && !visited[nextRow][nextCol])) {
            currentIndex = (currentIndex + 1) % 4
        }

        currentRow += directions[currentIndex][0]
        currentCol += directions[currentIndex][1]

    }
    return result
}
console.log(spiralOrder(input))
