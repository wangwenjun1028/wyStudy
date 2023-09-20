// 某长方形停车场，每个车位上方都有对应监控器，当且仅当在当前车位或者前后左右四个方向任意一个车位范围停车时，监控器才需要打开；

// 给出某一时刻停车场的停车分布，请统计最少需要打开多少个监控器
// 第一行输入m，n表示长宽，满足1 < m,n <= 20；

// 后面输入m行，每行有n个0或1的整数，整数间使用一个空格隔开，表示该行已停车情况，其中0表示空位，1表示已停；

// 输入
// 3 3
// 0 0 0
// 0 1 0
// 0 0 0

// 输出
// 5
const { test, expect } = require('./test')
const input = [3, 3]
const data = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const output = 5;
const getResult = (data) => {
    let num = 0;
    data.forEach((rows, i) => {
        rows.forEach((col, j) => {
            // 本身有车位的
            if (col === 1) {
                console.log(`${i}${j}`)
                num++
            } else {
                // 前后左右有车位的
                //左右前后有车位的
                if ((j - 1 >= 0 && rows[j - 1] === 1) || (j + 1 < rows.length && rows[j + 1] === 1) || (i - 1 >= 0 && data[i - 1][j] === 1) || (i + 1 < data.length && data[i + 1][j])) {
                    console.log(`${i}${j}`)
                    num++
                }
            }
        })
    })
    console.log(num)
    return num;
}
test('测试', () => {
    expect(getResult(data)).toBe(output)
})
console.log(test)