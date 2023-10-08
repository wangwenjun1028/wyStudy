/**
题目描述：
疫情期间课堂的座位进行了特殊的调整，不能出现两个同学紧挨着，必须隔至少一个空位给你一个整数数组 desk表示当前座位的占座情况，由若干 0 和 1 组成，其中 0 表示没有占位，1 表示占位。在不改变原有座位秩序情况下，还能安排坐几个人?

输入描述：
第一行是个了数组表示作为占座情况，由若干 0 和1组成，其中 0 表示没有占位，1 表示占位

输出描述：
输出数值表示还能坐几个人
1 <= desk.length <= 2 * 10^4

测试用例
输入：
1,0,0,0,1
输出
1
说明：
只有desk[2]的位置可以坐一个人

*/
const { expect, test } = require("./test")
const input = [1, 0, 0, 0, 1], output = 1
const getResult = input => {
    let result = 0;
    input.forEach((item, index) => {
        if (item === 0 && (input[index - 1] === 0) && input[index + 1] === 0) {
            result++
        }
    })
    return result
}
test('座位调整', () => {
    expect(getResult(input)).toBe(output)
})