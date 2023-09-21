/*
题目描述
如果矩阵只中的许多系数都为零，那么该矩阵就是稀疏的。对稀疏现象有兴趣是因为它的开发可以带来巨大的计算节省，并且在许多大的实践中都会出现矩阵稀疏的问题。
给定一个矩阵，现在需要逐行和逐列地扫描矩阵，如果某一行或者某一列内，存在连续出现的0的个数超过了行宽或者列宽的一半 [W /2](整除)，则认为该行或者该列是稀疏的。
扫描给定的矩阵，输出稀疏的行数和列数。

输入描述
第一行输入为M和N，表示矩阵的大小M*N， 0<=M<=100, 0<=N<=100
接下来M行输入为矩阵的成员，每行N个成员，矩阵成员都是有符号整数，范围-32,768到32,767

输出描述
输出两行，第一行表示稀疏行的个数，第二行表示稀疏列的个数。

用例1：
输入
3 3
1 0 0 
0 1 0
0 0 1
输出 
3 3

用例2：
输入：
5 3
-1 0 1
 0 0 0
-1 0 0
0 -1 0
0 0 0
输出
5 3
*/
const { test, expect } = require("./test")
const input1 = [3, 3], input2 = [5, 3]
const data1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
const data2 = [[-1, 0, 1], [0, 0, 0], [-1, 0, 0], [0, -1, 0], [0, 0, 0]];
const output1 = [3, 3], output2 = [5, 3];
const getResult = (input, data) => {
    const [row, col] = input;
    let rowResult = 0, colResult = 0;
    data.forEach(item => {
        if (getCount(item) >= parseInt(col / 2)) {
            rowResult++
        }
    })
    for (let i = 0; i < col; i++) {
        let temparr = []
        for (let j = 0; j < data.length; j++) {
            temparr.push(data[j][i])
        }
        console.log(temparr)
        if (getCount(temparr) >= parseInt(row / 2)) {
            colResult++
        }

    }
    console.log([rowResult, colResult])
    return [rowResult, colResult]
}

const getCount = arr => {
    let result = 0, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {

            count = 0
        } else {
            count++
        }
        if (count > result) result = count

    }
    return result
}
test('矩阵稀疏扫描', () => {
    expect(getResult(input2, data2)).toBe(output2)
})