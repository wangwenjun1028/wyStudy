/*
题目描述
贫如洗的樵夫阿里巴巴在去砍柴的路上，无意中发现了强盗集团的藏宝地，藏宝地有编号从0~N的箱子每个箱子上面贴有一个数字箱子中可能有一个黄金宝箱。
黄金宝箱满足排在它之前的所有箱子数字和等于排在它之后的所有箱子数字之和;
一个箱子左边部分的数字和定义为0: 最后一个箱子右边部分的数字和定义为0.
帮阿里巴巴找到黄金宝箱，输出第一个满足条件的黄金宝箱编号，如果不存在黄金宝箱，请返回-1。

输入描述
箱子上贴的数字列表，使用逗号分隔，例如1，-1，0
宝箱的数量不小于1个，不超过10000 宝箱上贴的数值范围不低于-1000，不超过1000

输出描述
第一个黄金宝箱的编号

用例1
输入
2,5,-1,8,6
输出
3

用例2
输入
8,9
输出
-1
*/
const { test, expect } = require("./test")
const input1 = [2, 5, -1, 8, 6], input2 = [8, 9], input3 = [11];
const output1 = 3, output2 = -1, output3 = 0
const getResult = (input) => {
    for (let i = 0; i < input.length; i++) {
        let preArr = input.slice(0, i)
        let nextArr = input.slice(i + 1, input.length)
        let preTotal = preArr.reduce((pre, next) => {
            return pre + next
        }, 0)
        let nextTotal = nextArr.reduce((pre, next) => {
            return pre + next
        }, 0)
        if (preTotal === nextTotal) {
            return i
        }
    }
    return -1
}
test('阿里巴巴找黄经', () => {
    expect(getResult(input2)).toBe(output2)
})
