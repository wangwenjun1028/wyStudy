// 题目描述
// 告警抑制，是指高优先级告警抑制低优先级告警的规则。高优先级告警产生后，低优先级告警不再产生。请根据原始告警列表和告警抑制关系，给出实际产生的告警列表。不会出现循环抑制的情况。告警不会传递，比如A->B.B->C，这种情况下A不会直接抑制C。但被抑制的告警仍然可以抑制其他低优先级告警

//输入描述
/*第一行为数字N，表示告警抑制关系个数，0<=N <=120
接下来N行，每行是由空格分隔的两个告警ID，例如: id1 id2，表示id1抑制id2，告警ID的格式为:
大写字母+0个或者1个数字
*/

// 输出描述
/*
真实产生的告警列表
*/

//用例
/*
输入：
2
A B
B C
A B C D E
输出：
A D E
*/
const { test, expect } = require("./test")
const input = 2;
const data = [['A', 'B'], ['B', 'C'], ['A', 'B', 'C', 'D', 'E']]
const output = 'ADE'
const getResult = (input, data) => {
    const result = [];
    data[input] && data[input].forEach((key, index) => {
        const tepNext = index === data[input].length - 1 ? `${key}` : `${key}${data[input][index + 1]}`
        const tepPre = index == 0 ? `${key}` : `${data[input][index - 1]}${key}`
        for (let i = 0; i < input; i++) {
            if (data[i].join("") === tepPre) {
                console.log(key, tepPre)
                result.push(key)
                break
            }
        }
    })
    return data[input].filter(item => {
        return !result.includes(item)
    }).join("")
}
test('测试', () => {
    expect(getResult(input, data)).toBe(output)
})