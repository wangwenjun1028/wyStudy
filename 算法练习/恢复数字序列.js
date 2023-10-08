/*
题目描述：
对于一个连续正整数组成的序列，可以将其拼接成一个字符串，再将字符串里的部分字符打乱顺序。如序列8 9 10 11 12，拼接成的字符串为89101112，打乱一部分字符后得到90811211，原来的正整数10就被拆成了0和1。现给定一个按如上规则得到的打乱字符的字符串，请将其还原成连续正整数序列，并输出序列中最小的数字.

输入描述：
输入一行，为打乱字符的字符串和正整数序列的长度，两者间用空格分隔，字符审长度不超过200，正整数不超过1000，保证输入可以还原成唯一序列。

输出描述：
输出一个数字，为序列中最小的数字

测试用例：
输入
19801211 5
输出
8
说明：正常的数字序列为8 9 10 11 12 这5个数字，最小数字为8

*/
const { expect, test } = require("./test")
const input = "19801211 5"
const output = 8;
const getResult = (input) => {
    let [num, count] = input.split(" ");
    num = num.split("").sort((a, b) => a - b).join("")
    let result;
    const bit = Math.floor(num.length / count)
    const isRest = num.length % count
    let start;
    if (isRest) {
        start = Math.pow(10, bit) - isRest + 1
    } else {
        start = Math.pow(10, bit - 1)
    }

    for (let i = start; i < 1000; i++) {
        let temp = []
        for (j = i; j < i + Number(count); j++) {
            temp.push(j)
        }
        if (temp.join("").split("").sort((a, b) => a - b).join("") === num) {
            result = i
            break
        }
    }
    return result
}
test("恢复数字排序", () => {
    expect(getResult(input)).toBe(output)
})
