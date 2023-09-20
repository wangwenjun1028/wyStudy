// 题目内容
/*
AI识别到面板上有 
 个指示灯，灯大小一样，任意两个之间无重叠。

由于AI识别误差，每次识别到的指示灯位置可能有差异，以4个坐标值描述AI识别的指示灯的大小和位置(左上角x1,y1，右下角x2,y2)

请输出先行后列排序的指示灯的编号，排序规则:

1.每次在尚未排序的灯中挑选最高的灯作为的基准灯，

2.找出和基准灯属于同一行所有的灯进行排序。两人灯高低偏差不超过灯半径算同一行(即两个灯坐标的差\leq灯高度的一半)。
*/

// 输入描述
/*
第一行为N，表示灯的个数 接下来N行，每行为1个灯的坐标信息，格式为:
编号x_1 y_1 x_2 y_2
*/

//输出描述
// 排序后的编号列表，编号之间以空格分隔

//用例
/*
输入：
5
1 0 0 2 2
2 6 1 8 3
3 3 2 5 4
5 5 4 7 6
4 0 4 2 6
输出：
1 2 3 4 5
*/
const { expect, test } = require("./test")
const input = 5;
const data = [[1, 0, 0, 2, 2], [2, 6, 1, 8, 3], [3, 3, 2, 5, 4], [5, 5, 4, 7, 6], [4, 0, 4, 2, 6]];
const output = '1 2 3 4 5';
const getResult = (input, data) => {
    const result = [];
    // 先选出y1同一行的，再按X1升序排序
    data.sort((a, b) => a[2] - b[2])
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[j][2] === data[i][2] && data[i][1] > data[j][1]) {
                // 交换
                let t = data[i]
                data[i] = data[j]
                data[j] = t
            }
        }
    }
    data.forEach(item => {
        result.push(item[0])
    })

    return result.join(" ");
}
test('AI面板识别', () => {
    expect(getResult(input, data)).toBe(output)
})
console.log(getResult(input, data))


