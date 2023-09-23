/*
题目描述
贫如洗的椎夫阿里巴巴在去砍柴的路上，无意中发现了强盗集团的藏宝地，藏宝地有编号从0-N的箱子，每个箱子上面有一个数字，箱了排列成一个环，编号最大的箱子的下一个是编号为0的箱子。
请输出每个箱子贴的数字之后的第一个比它大的数，如果不存在则输出-1。

输入描述
输入一个数字字串，数字之间使用逗号分隔，例如: 1,2,3,1
1 <=字串中数字个数 <= 10000:
-100000 <=每个数字值 <=10000:

输出描述
下一个大的数列表，以逗号分隔，例如: 2,3,6,-1,6

测试用例1：
输入：2,5,2
输出：5,-1,5
测试用例2：
输入：3,4,5,6,3
输出：4,5,6,-1,4

*/
const { expect, test } = require("./test")
const input1 = [2, 5, 2], input2 = [3, 4, 5, 6, 3]
const output1 = [5, -1, 5], output2 = [4, 5, 6, -1, 4];
const getResult = (input) => {
    const result = []
    for (let i = 0; i < input.length; i++) {
        let tepArr = input.slice(i + 1).concat(input.slice(0, i));

        result.push(tepArr.filter(item => item > input[i]).length ? tepArr.filter(item => item > input[i])[0] : -1)
    }
    return result
}
test("阿里巴巴找黄金宝箱2", () => {
    expect(getResult(input2).join(",")).toBe(output2.join(","))
})